import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../shared/NavBar/NavBar';
import Title from '../../shared/Title/Title';
import Loader from '../../shared/Loader/Loader';
import Form from '../../components/Form/Form';
import ContactsList from '../../components/ContactsList/ContactsList';
import Filter from '../../components/Filter/Filter';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

class Contacts extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <NavBar />
        <Title title="phonebook" />
        <Form />
        {this.props.isLoading && <Loader />}
        <Filter />
        <ContactsList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
