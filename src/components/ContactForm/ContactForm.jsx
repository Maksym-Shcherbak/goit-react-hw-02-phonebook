import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    return (
      <form className={css.contactForm} onSubmit={onAddContact}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className={css.contactForm__input}
          id="name"
          value={name}
          onChange={onHandleChange}
          pattern={
            "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          }
          required
        />
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          className={css.contactForm__input}
          id="number"
          value={phone}
          onChange={onHandleChange}
          pattern={
            '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}'
          }
          required
        />
        <button type="submit" className={css.contactForm__button}>
          Add contact
        </button>
      </form>
    );
  }
}
