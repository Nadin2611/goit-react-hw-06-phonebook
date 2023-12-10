import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: initialState.contacts,
  reducers: {
    addContact: {
      prepare: contact => {
        return { payload: { id: nanoid(), ...contact } };
      },
      reducer: (state, action) => {
        state.push(action.payload);
      },
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
