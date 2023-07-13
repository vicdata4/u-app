import { Link } from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  function logout() {
    const auth = getAuth();
      signOut(auth).then(() => {
        navigate('/')
      }).catch((error) => {
        console.log('An error happened.');
      });
  }

    return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home page
        </p>
        <Link to="/profile">Go to profile</Link>
        <button type="submit" variant="contained" onClick={logout}>
          logout
        </button>
      </header>
    </div>
    )
  }