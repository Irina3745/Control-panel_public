import Dashboard from 'components/dashboard/Dashboard';
import NavBar from 'components/layout/NavBar';
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Info from './components/auth/Info';
import Settings from './components/auth/Settings';
import DefaultDevices from './components/auth/DefaultDevices';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/info' component={Info} />
          <Route path='/defaultdevices' component={DefaultDevices} />
          <Route path='/defaultdevices/manage-light' exact component={Info} />
          <Route path='/settings' component={Settings} />
          <Route path='/' component={Dashboard} />  
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
