import { useState } from 'react';

import {
  Form,
  FormContainer,
  Label,
  Input,
  AddButton,
} from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [formContact, setFormContact] = useState({ name: '', number: '' });

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    console.log(name);
    console.log(value);

    setFormContact(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(formContact);
    reset();
  };

  const reset = () => {
    setFormContact({ name: '', number: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormContainer>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={formContact.name}
            onChange={handleChange}
            required
            placeholder="Rosie Simpson"
            pattern="[a-zA-Zа-яА-ЯІіЇїЄє ]+(([' \-][a-zA-Zа-яА-ЯІіЇїЄє ])?[a-zA-Zа-яА-ЯІіЇїЄє])+$"
          ></Input>
        </Label>
      </FormContainer>

      <FormContainer>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={formContact.number}
            onChange={handleChange}
            required
            placeholder="459-12-56"
            pattern="\+?[0-9\s\-\(\)]+"
          ></Input>
        </Label>
      </FormContainer>

      <AddButton type="submit">Add Contact</AddButton>
    </Form>
  );
};
