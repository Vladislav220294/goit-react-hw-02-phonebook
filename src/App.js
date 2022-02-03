import { Component } from 'react/cjs/react.production.min';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
  };
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onformSubmitHandler={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
