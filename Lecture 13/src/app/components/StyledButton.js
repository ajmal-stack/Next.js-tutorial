import styled from 'styled-components';
const Button = styled.button`
  background-color: ${(props) => (props.primary ? '#0070f3' : 'white')};
  color: ${(props) => (props.primary ? 'white' : '#0070f3')};
  padding: 10px 20px;
  border: 2px solid #0070f3;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? '#005bb5' : '#eaeaea')};
  }
`;

export default Button;
