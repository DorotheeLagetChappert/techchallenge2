import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './screens/Home/Home'

import './App.css';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
