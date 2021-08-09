
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Register from "./register/Register";
import Home from './pages/home/home'
import Login from "./login/Login";
import Watch from "./pages/watch/Watch"



function App() {
  const user = true
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {user ? <Home type="movies" /> : <Redirect to="/register" />}
        </Route>
        <Route exact path='/register' >
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route exact path='/login' >
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>
        {user && (
          <>
            <Route exact path='/watch' >
              <Watch />
            </Route>
            <Route exact path='/series'>
              <Home type="series" />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
