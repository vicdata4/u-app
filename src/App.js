import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import { Home } from './views/Home.js';
import { Profile } from './views/Profile.js';
import { Product } from './views/Product.js';

const router = createBrowserRouter(
  [{ path: "*", Component: Root }],
  { basename: "/u-app" }
);

// 4️⃣ RouterProvider added
function App() {
  return <RouterProvider router={router} />;
}

// 1️⃣ Changed from App to Root
function Root() {
  // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default App;