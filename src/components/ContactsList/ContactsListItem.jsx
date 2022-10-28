import { memo } from 'react';
import { ListElement, DeleteBtn } from './ContactsList.styled';

const ContactsListItem = ({ id, name, phone, removeContact }) => {
  return (
    <ListElement>
      {name}: {phone}
      <DeleteBtn type="button" onClick={() => removeContact(id)}>
        Delete
      </DeleteBtn>
    </ListElement>
  );
};

export default memo(ContactsListItem);
