import React, { useContext } from 'react';
import { Dialog, Box, styled, Typography } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { AccountContext } from '../constants/contexts/AccountProvider';
import { jwtDecode } from 'jwt-decode';
import { addUser, getProfile } from '../../service/api';
import logo from "../Header/logo.png";

const dialogStyle = {
  height: '96%',
  marginTop: '12%',
  width: '60%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #000000 0%, #050100 100%)'
};

const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
});

const GoogleButtonContainer = styled(Box)({
  position: 'relative',
  textAlign: 'center'
});

const WhiteBorderBox = styled(Box)({
  border: '2px solid #3b3b3b',
  width: '400px',
  height: '450px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #434343 0%, #050505 100%)',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.6)', 
  borderRadius: '12px', 
  zIndex: 10,
  padding: '20px' 
});

const Text = styled(Typography)({
  color: '#ffffff', 
  fontSize: '40px', 
  fontWeight: 800, 
  margin: '4px 0', 
  //alignSelf: 'flex-start' 
});

const Logo = styled('img')({
  width: '100px', 
  height: '100px', 
  position: 'fixed', 
  top: '20px',
  left: '20px',
  zIndex: 20 
});

function LoginDialog() {
  const { setPage, setProfile, setAccount } = useContext(AccountContext);

  const onLoginError = (res) => {
    console.log(res);
  };

  const onLoginSuccess = async (res) => {
    let decoded = jwtDecode(res.credential);
    setAccount(decoded);
    setPage(1);
    await addUser(decoded);
    let response = await getProfile(decoded.sub);
    setProfile(response);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Logo src={logo} alt="Logo" />
      <Container>
        <GoogleButtonContainer>
          <WhiteBorderBox>
            <Text>Login</Text>
            <GoogleLogin
              onSuccess={onLoginSuccess}
              onError={onLoginError}
              render={(renderProps) => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  Login with Google
                </button>
              )}
            />
          </WhiteBorderBox>
        </GoogleButtonContainer>
      </Container>
    </Dialog>
  );
}

export default LoginDialog;