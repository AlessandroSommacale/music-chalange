import Close from '../../../public/close.svg';
import { LoadingContainer, Spinner } from '../AlbumGrid/AlbumGrid.styles';
import { ButtonIcon, CenterText } from './LoginModal.styles';
import { identityApi, useLoginUserMutation, useRegisterUserMutation } from '@/store/api/identityApi';
import { setUser } from '@/store/slices/user.slice';
import { Button, ErrorText, Input, InputContainer, InputLabel, LinkButton, Modal, Overlay, SuccessText } from '@/styles/baseComponents';
import { FocusTrap } from 'focus-trap-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

interface LoginModalProps {
  mode: 'login' | 'signup';
  closeCallback: () => void;
}

const LoginModal = ({ mode, closeCallback }: LoginModalProps) => {
  const [registerUser, { data: registerData, isLoading: isRegisterLoading, error: registerError }] = useRegisterUserMutation();
  const [loginUser, { isLoading: isLoginLoading, error: loginError }] = useLoginUserMutation();
  const [modalMode, setModalMode] = useState(mode);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const changeMode = () => {
    dispatch(identityApi.util.resetApiState());
    setModalMode(modalMode === 'login' ? 'signup' : 'login');
    setPassword('');
    setEmail('');
  };
  const handleLogin = async () => {
    if (modalMode === 'login') {
      const { data } = await loginUser({ email, password });
      if (data) {
        dispatch(setUser(data));
        closeCallback();
      }
    } else {
      const { data } = await registerUser({ email, password });
      if (data) {
        dispatch(setUser(data));
      }
    }
  };

  return (
    <Overlay>
      <FocusTrap>
        <Modal>
          <ButtonIcon onClick={() => closeCallback()}>
            <Close />
          </ButtonIcon>
          <InputContainer>
            <Input id="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
            <InputLabel htmlFor="email">Email</InputLabel>
          </InputContainer>
          <InputContainer>
            <Input
              id="password"
              placeholder=""
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <InputLabel htmlFor="password">Password</InputLabel>
          </InputContainer>
          <CenterText>
            {!registerData &&
              (modalMode === 'login' ? (
                <p>
                  Don&apos;t have an account?, <LinkButton onClick={changeMode}>Sign up</LinkButton>
                </p>
              ) : (
                <p>
                  Already have an account?, <LinkButton onClick={changeMode}>Log in</LinkButton>
                </p>
              ))}
            {modalMode === 'login' && loginError && <ErrorText>Unable to login, incorrect email or password</ErrorText>}
            {modalMode === 'signup' && registerError && <ErrorText>Unable to sign up at the moment, try again later</ErrorText>}
            {registerData && (
              <SuccessText>
                Sign up successfull! <br /> you have been automatically logged in
              </SuccessText>
            )}
            {isLoginLoading || isRegisterLoading ? (
              <LoadingContainer>
                <Spinner />
              </LoadingContainer>
            ) : (
              !registerData && (
                <Button onClick={handleLogin} disabled={!email || !password}>
                  {modalMode === 'login' ? 'Log in' : 'Sign up'}
                </Button>
              )
            )}
          </CenterText>
        </Modal>
      </FocusTrap>
    </Overlay>
  );
};

export default LoginModal;
