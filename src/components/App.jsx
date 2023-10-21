import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '15px',
          fontSize: 40,
          color: '#010101',
          background: 'linear-gradient(45deg, #49a09d, #5f2c82',
        }}
      >
        <ContactForm></ContactForm>
      </div>
    );
  }
}
