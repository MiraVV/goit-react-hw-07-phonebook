import { memo } from 'react';
import { TableTh, DeleteBtn } from './ContactsList.styled';

// const ContactsListItem = ({ id, name, phone, removeContact }) => {
//   return (
//     <ListElement>
//       {name}: {phone}
//       <DeleteBtn type="button" onClick={() => removeContact(id)}>
//         Delete
//       </DeleteBtn>
//     </ListElement>
//   );
// };

const ContactsListItem = ({ id, name, phone, removeContact }) => {
  return (
    <tr>
      <TableTh>{name}</TableTh>
      <TableTh>{phone}</TableTh>
      <TableTh>
        <DeleteBtn type="button" onClick={() => removeContact(id)}>
          Delete
        </DeleteBtn>
      </TableTh>
    </tr>
  );
};

export default memo(ContactsListItem);
