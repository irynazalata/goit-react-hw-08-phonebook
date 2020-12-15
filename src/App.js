import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import Title from './shared/Title/Title';
import Loader from './shared/Loader/Loader';
import Form from './components/Form/Form';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import contactsOperations from './redux/contacts/contactsOperations';
import contactsSelectors from './redux/contacts/contactsSelectors';
import './App.css';
import { Route } from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Loader />}>
        {routes.map((route, idx) => (
          <Route key={idx} {...route}></Route>
        ))}
      </Suspense>
    );
  }
}

export default App;
