import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Redirect, useHistory } from 'react-router-dom'
import Peer, { MediaConnection, DataConnection } from 'skyway-js'
import User from '../model/user'
import Chat from './Chat'
import { users } from '../routes'
import Information from './Information'

const Wrapper = styled.div`
  margin: 0 auto;
`

const BackButton = styled.div`
  cursor: pointer;
`

interface Props {
  user: User;
}

const Main: React.FC<Props> = ({ user }) => {

  const history = useHistory();
  const friends = users.filter(u => u.id !== user.id);
  const [peer, setPeer] = useState<Peer>();
  const [dataConnection, setDataConnection] = useState<DataConnection>();

  useEffect(() => {
    if (!peer) {
      const p = new Peer(user.id, {
        key: process.env.API_KEY,
        debug: 0
      });

      p.on('connection', async (conn: DataConnection) => {
        if (!dataConnection) {
          setDataConnection(conn);
          dataConnectionHandler(conn);
        }
      });

      setPeer(p);
    }
  }, [peer])

  const handleFriend = (partner: User) => {
    try {
      const conn = peer.connect(partner.id, {'metadata': { user } });
      setDataConnection(conn);
      dataConnectionHandler(conn);
    } catch (err) {
    }
  }

  const handleBack = () => {
    if (dataConnection) {
      dataConnection.close();
    }
    if (peer) {
      peer.destroy();
    }
    history.push('/');
  }

  const dataConnectionHandler = (conn: DataConnection) => {
    conn.on('open', () => {
      console.log('Data connection opened.');
    });
    conn.on('close', () => {
      console.log('Data connection closed.');
    });
    conn.on('data', () => {
      console.log('Data received.');
    });
    conn.on('error', () => {
      console.log('Error occurred.');
    })
  }

  return (
    <Wrapper>
      {
        user
        ? (<div>
            {
              friends.map(friend => (
                <Information key={friend.id} setUser={handleFriend} user={friend}>
                </Information>
              ))
            }
            <Chat />
            <BackButton onClick={handleBack}>
              ←
            </BackButton>
          </div>)
        : <Redirect to="/" />
      }
    </Wrapper>
  )
}

export default Main;
