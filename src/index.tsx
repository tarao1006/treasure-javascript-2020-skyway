import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routing from './routes';

const App: React.FC<{}> = () => {

  return (
    <Routing />
  )
}

ReactDOM.render(
  <App/>, document.getElementById('app')
)
