import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import {ReactComponent as ReactLogo} from '../assets/octopus.svg';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { emailValidator } from '../utils/constants.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

export function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [isValidated, setIsValidated] = useState(false);
  const [authFailed, setAuthFailed] = useState(false);
  const navigate = useNavigate();

  function validateEmail() {
    const isValid = emailValidator(email);
    if (emailValidator(email)) {
      setEmailHelper('');
    } else {
      setEmailHelper('Invalid email.');
      setIsValidated(true);
    }

    setAuthFailed(false);
    return isValid;
  }

  function submitForm(e) {
    e.preventDefault();

    if (validateEmail() && password) {
      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate('/home');
        })
        .catch((error) => {
          setAuthFailed(true);
          setIsValidated(true);
        });
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={submitForm} className="fields-container">
      <div className="text-field centered">
        <ReactLogo />
        </div>
        <div className="text-field">
        <TextField
          id="outlined-basic"
          className="TextField"
          helperText={emailHelper}
          error={!!emailHelper}
          label="User"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          onKeyUp={(event) => {
            if(isValidated) {
              validateEmail();
            }
          }}
          variant="outlined" />
        </div>
        <div className="text-field">
        <TextField
          id="outlined-password-input"
          className="TextField"
          label="Password"
          type="password"    
          value={password}
          onKeyUp={(event) => {
            setAuthFailed(false);
          }}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          autoComplete="current-password"
        />
        </div>
        
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Login
        </Button>

        {authFailed
          ?(<Alert severity="error">Invalid user or password.</Alert>)
          : (<span></span>)}
      </form>
    </div>
  )
}