import React, { useEffect } from "react";
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
import PrivateRoutes from "./PrivateRoutes.jsx";
import RoleBasedRoutes from "./RoleBasedRoutes.jsx";
import Album from "./components/Album/Album.jsx";
import Explore from "./components/explore/Explore.jsx";
import AlbumDetail from "./components/album/AlbumDetails.jsx";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./app/store.js";
import { fetchCurrentUser } from "./features/auth/authSlice.js";

// Create Router
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
      <Route
        path="album/:albumname"
        element={<PrivateRoutes element={<AlbumDetail />} />}
      />
      <Route path="explore" element={<PrivateRoutes element={<Explore />} />} />
    </Route>
  )
);

// This component manages the loading state
function AppWrapper() {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="bg-[#4e4e4e] text-white text-6xl min-h-screen">
        Loading...
      </div>
    );
  }

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </React.StrictMode>
);
