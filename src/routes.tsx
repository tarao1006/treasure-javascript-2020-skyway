import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import User from './model/user'
import Top from './components/Top';
import Main from './components/Main'

const Routing: React.FC<{}> = () => {

  const [currentUser, setCurrentUser] = useState<User>()

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
