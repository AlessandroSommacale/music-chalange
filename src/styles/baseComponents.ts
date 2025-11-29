import styled from 'styled-components';

export const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  border: 0 solid transparent;
  border-radius: 20px;
  padding: 6px 16px;
  cursor: pointer;
  position: relative;
  height: 30px;

  &:hover {
    background: #000;

    &::before {
      content: '';
    }
  }

  &:disabled {
    background: grey;
    cursor: not-allowed;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -2px;
    z-index: -1;
    border-radius: inherit;
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  }
`;

export const LinkButton = styled.button`
  background: none;
  border: none;
  color: #82378c;
  text-decoration: underline;
  cursor: pointer;
  font-size: 16px;
`;

export const InputContainer = styled.div`
  position: relative;

  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    top: -50px;
    left: 0;
    font-size: 16px;
  }
`;
export const InputLabel = styled.label`
  position: relative;
  left: 0;
  top: -24px;
  color: #fff;
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 16px;
  line-height: 1.42;
  opacity: 1;
`;
export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  line-height: 1.43;
  background: none;
  border: none;
  border-bottom: 1px solid grey;
  cursor: text;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: #1a1a1a;
  width: 85%;
  max-width: 600px;
  min-height: 300px;
  position: relative;
  border-radius: 16px;
  padding: 4.25rem 4.5rem;
  display: grid;
  grid-gap: 18px;
  position: relative;
`;

export const ErrorText = styled.p`
  color: red;
`;
export const SuccessText = styled.p`
  color: green;
`;
