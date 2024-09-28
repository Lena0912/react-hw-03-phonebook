import styled from 'styled-components';

export const Container = styled.div`
  display: flex;  
  flex-direction: column;
  margin-bottom: 20px;
  
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid orange;
  width: 300px;
  position: relative;
`;
export const ListItem = styled.li`
  display: flex;
  padding: 8px ;  
  gap: 12px;  
  align-items: center;
  
`;
export const ButtonContact = styled.button`
background-color: lightblue;
color: green;
border-radius: 5px;
width: 100px;
position: absolute;
padding: 5px;
cursor: pointer;
top: 50%;
transform: translateY(-50%);
right: 10px;

`;