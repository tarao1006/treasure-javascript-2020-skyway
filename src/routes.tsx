import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Top from './top'

interface Props {

}

const Routing: React.FC<Props> = ({ }) => {

  return (
    <Router>
      <Switch>
        <Route path="/" component={Top} />
      </Switch>
    </Router>
  )
}

export default Routing;
