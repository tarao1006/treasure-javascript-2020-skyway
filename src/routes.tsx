import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import User from './model/user'
import Top from './components/Top';
import Main from './components/Main'

export const users = [
  new User("WUJ4xQKGB562wFh5", 'Lilith', 'red', ),
  new User("pUHmVLvSuupDgoU7", 'Adam', 'green'),
  new User("wLGQf6aVKd9NEgCU", 'Eva', 'purple')
]

const Routing: React.FC<{}> = () => {

  const [currentUser, setCurrentUser] = useState<User>(users[0])

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Top setCurrentUser={setCurrentUser} />} />
        <Route path="/user/:id" render={() => <Main user={currentUser} />} />
      </Switch>
    </Router>
  )
}

export default Routing;
