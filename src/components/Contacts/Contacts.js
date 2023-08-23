import { StyledBtnDelete, StyledContact, StyledList } from './Contacts.styled';
import { TiUserDelete } from 'react-icons/ti';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <StyledList>
        {contacts.map(contact => (
          <StyledContact key={contact.id}>
            {contact.name} : {contact.number}
            <StyledBtnDelete onClick={() => onDeleteContact(contact.id)}>
              <TiUserDelete></TiUserDelete>
            </StyledBtnDelete>
          </StyledContact>
        ))}
      </StyledList>
    </>
  );
};
