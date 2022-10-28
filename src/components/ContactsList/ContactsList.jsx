import PropTypes from 'prop-types';
import ContactsListItem from './ContactsListItem';

const ListContact = ({ items, removeContact }) => {
  const elements = items.map(item => (
    <ContactsListItem key={item.id} {...item} removeContact={removeContact} />
  ));
  return <ul>{elements}</ul>;
};

ListContact.defaultProps = {
  items: [],
};

ListContact.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ListContact;
