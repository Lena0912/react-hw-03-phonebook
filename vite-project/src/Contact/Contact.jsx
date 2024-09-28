import { ButtonContact, Container, List, ListItem } from "./Contact.styled";
import { HiUser, HiPhone } from "react-icons/hi";
export default function Contact({ data, onDelete }) {

    if (!data) {
        return <p>No data</p>
    }
  
    const { id, name, number } = data;
    return (
      <Container>
        <List>
          <ListItem>
            <HiUser />
            {name}
          </ListItem>
          <ListItem>
            <HiPhone />
            {number}
          </ListItem>
          <ButtonContact type="submit" onClick={() => onDelete(id)}>
            Delete
          </ButtonContact>
        </List>
      </Container>
    );
}