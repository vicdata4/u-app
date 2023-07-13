import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  Navigate,
  Outlet
} from "react-router-dom";

import { Home } from './views/Home.js';
import { Profile } from './views/Profile.js';
import { Product } from './views/Product.js';
import { Login } from './views/Login.js';
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { useState } from 'react';
import { app } from './api/firebase.js';

const router = createBrowserRouter(
  [{ path: "*", Component: Root }],
  { basename: "/u-app" }
);

// 4️⃣ RouterProvider added
function App() {
  return <RouterProvider router={router} />;
}

const ProtectedRoute = ({
  user,
  redirectPath = '/',
  children,
}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

// 1️⃣ Changed from App to Root
function Root() {
  const [user, setUser] = useState(null);

  if(user !== null) {
    return (
      <Routes>
        <Route element={<ProtectedRoute user={!user} redirectPath="/home" />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );

  } else {
    onAuthStateChanged(getAuth(), (user) => {
      setUser(!!user);
    });

    return (<div></div>);
  }
}

export default App;