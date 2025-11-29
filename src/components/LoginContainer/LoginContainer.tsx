import LoginModal from '../LoginModal/LoginModal';
import { resetUser } from '@/store/slices/user.slice';
import { RootState } from '@/store/store';
import { Button } from '@/styles/baseComponents';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  p {
    padding-bottom: 16px;
  }
  & > button {
    float: right;
  }
`;

const LoginContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(resetUser());
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <Container>
      {user.email && <p>Hello, {user.email}</p>}
      {user.localId ? <Button onClick={handleLogout}>Log out</Button> : <Button onClick={openModal}>Log in</Button>}
      {showModal && <LoginModal mode="login" closeCallback={() => closeModal()} />}
    </Container>
  );
};

export default LoginContainer;
