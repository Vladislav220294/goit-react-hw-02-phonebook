import { Component } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    } 
    inputNameId = nanoid();
    inputNumberId = nanoid();
    
handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };
  handleNumberChange = event => {
    this.setState({ number: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault()
      this.props.onformSubmitHandler(this.state);
      this.reset()
}
    reset = () => {
    this.setState({ name: '',
        number: '',  });
}
    render() { 
        return (<div>
        <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor={this.inputNameId}>Name
                    <input
id={this.inputNameId}
  value={this.state.name}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={this.handleNameChange}
        />
            </label>
            <label htmlFor={this.inputNumberId}>Number
                    <input
    id={this.inputNumberId}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.handleNumberChange}
/>
            </label>
            <button type='submit'>Add contact</button>
        </form>
    </div>);
    }
}
 
export default ContactForm;