import React from 'react';
// import $ from 'jquery';
// import Popper from 'popper.js';
import Header from './components/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import About from './components/About';


import {Provider} from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path='/' component={Contacts} />
        <Route exact path='/contact/add' component={AddContact}/>
        <Route exact path='/contact/edit/:id' component={EditContact}/>
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
