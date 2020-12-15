import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import Title from './shared/Title/Title';
import Loader from './shared/Loader/Loader';
import Layout from './shared/Layout/Layout';
import Form from './components/Form/Form';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import contactsOperations from './redux/contacts/contactsOperations';
import contactsSelectors from './redux/contacts/contactsSelectors';
import './App.css';
import { Route } from 'react-router-dom';
import routes from './routes';
import { authOperations } from './redux/auth';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Layout>
        <Suspense fallback={<Loader />}>
          {routes.map((route, idx) => (
            <Route key={idx} {...route}></Route>
          ))}
        </Suspense>
      </Layout>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
