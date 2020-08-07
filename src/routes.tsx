import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Top from './top'

const Routing: React.FC<{}> = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" component={Top} />
      </Switch>
    </Router>
  )
}

export default Routing;
