// code 5

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import User from "./components/user/User.jsx";
import { AuthProvider } from "./components/auth/authContext.jsx"; // Import AuthProvider instead
import AuthContext from "./components/auth/authContext.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import RoleBasedRoutes from "./RoleBasedRoutes.jsx";
import Album from "./components/Album/Album.jsx";
import Explore from "./components/explore/Explore.jsx";
import AlbumDetail from "./components/album/AlbumDetails.jsx";

// Define your router structure
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="contact"
        element={
          <PrivateRoutes
            element={
              <RoleBasedRoutes
                element={<Contact />}
                requiredRoles={["admin", "superadmin"]}
              />
            }
          />
        }
      />
      <Route path="album" element={<PrivateRoutes element={<Album />} />} />
      <Route path="album/:albumname" element={<PrivateRoutes element={<AlbumDetail />} />} />
      <Route path="explore" element={<PrivateRoutes element={<Explore />} />} />
    </Route>
  )
);

// Wrap your application with AuthProvider to make the context available throughout
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthProvider> {/* Use AuthProvider to wrap your app */}
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </React.StrictMode>
// );


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* Render a loader while checking authentication */}
      <AuthContext.Consumer>
        {({ loading }) =>
          loading ? <div>Loading...</div> : <RouterProvider router={router} />
        }
      </AuthContext.Consumer>
    </AuthProvider>
  </React.StrictMode>
);
