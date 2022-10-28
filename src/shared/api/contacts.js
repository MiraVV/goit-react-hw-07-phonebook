import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: 'https://635867fdc27556d2893d6d09.mockapi.io/api/v1/contacts',
  // params: {
  //   _limit: 10,
  // },
});

export const getContacts = async () => {
  const { data } = await instanceContacts.get('/');
  console.log('data', data);
  return data;
};

export const addContact = async data => {
  const { data: result } = await instanceContacts.post('/', data);
  return result;
};

export const removeContact = async id => {
  const { data } = await instanceContacts.delete(`/${id}`);
  return data;
};
