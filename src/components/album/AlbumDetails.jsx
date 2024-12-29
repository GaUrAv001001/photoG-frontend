// import { useParams, useLocation } from 'react-router-dom';
// import { useEffect, useState, useContext } from 'react';
// import AuthContext from '../auth/authContext';
// import axios from 'axios';
// const API_URL = import.meta.env.VITE_API_URL;

// function AlbumDetail() {
//   const { albumname } = useParams(); // Get albumname from the route
//   const location = useLocation();
//   const { albumId } = location.state || {}; // Access albumId from the state passed through Link
//   const { user } = useContext(AuthContext);

//   const [albumDetails, setAlbumDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {

//     const fetchAlbumDetails = async ()=>{
//         try {
//             if(albumId){
//                 const response = await axios.get(`${API_URL}/getAlbum/${albumId}`, {
//                     headers: {
//                         'Authorization': `Bearer ${user?.token}`,
//                         'Content-Type': 'application/json',
//                       },
//                      withCredentials:true
//                 })

//                 console.log("album details 2: ---->", response)

//                 if (response && response.data && response.data.success) {
//                     setAlbumDetails(response.data.data);
//                   } else {
//                     setError('Failed to fetch album details');
//                 }
//             }
//         } catch (error) {
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     }

//     if (albumId) {
//         fetchAlbumDetails();
//       }

//   }, [albumId]);

//   if (loading) {
//     return <p>Loading album details...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div>
//       <h1>Album: {albumname}</h1>
//       {albumDetails ? (
//         <div>
//           {console.log("album details: ", albumDetails)}
//         </div>
//       ) : (
//         <p>Loading album details...</p>
//       )}
//     </div>
//   );
// }

// export default AlbumDetail;

// import { useParams, useLocation } from 'react-router-dom';
// import { useEffect, useState, useContext } from 'react';
// import AuthContext from '../auth/authContext';
// import axios from 'axios';
// const API_URL = import.meta.env.VITE_API_URL;

// function AlbumDetail() {
//   const { albumname } = useParams(); // Get albumname from the route
//   const location = useLocation();
//   const { albumId } = location.state || {}; // Access albumId from the state passed through Link
//   const { user } = useContext(AuthContext);

//   const [albumDetails, setAlbumDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAlbumDetails = async () => {
//       try {
//         if (albumId) {
//           const response = await axios.get(`${API_URL}/getAlbum/${albumId}`, {
//             headers: {
//               'Authorization': `Bearer ${user?.token}`,
//               'Content-Type': 'application/json',
//             },
//             withCredentials: true,
//           });

//           console.log("album details 2: ---->", response);

//           if (response.data.success) {
//             setAlbumDetails(response.data.data);
//           } else {
//             setError('Failed to fetch album details');
//           }
//         }
//       } catch (error) {
//         setError('Error fetching album details: ' + error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (albumId) {
//       fetchAlbumDetails();
//     }
//   }, [albumId, user?.token]); // Add user?.token to the dependency array to refetch if token changes

//   if (loading) {
//     return <p>Loading album details...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div>
//       <h1>Album: {albumname}</h1>
//       {albumDetails ? (
//         <div>
//           <p>Name: {albumDetails.name}</p>
//           <p>Created By: {albumDetails.createdBy}</p>
//           <p>Created At: {new Date(albumDetails.createdAt).toLocaleDateString()}</p>
//           <p>Updated At: {new Date(albumDetails.updatedAt).toLocaleDateString()}</p>
//           <div>
//             {albumDetails.images.length > 0 ? (
//               albumDetails.images.map((imageId) => (
//                 <img
//                   key={imageId}
//                   src={`${API_URL}/getImage/${imageId}`} // Modify this to match your image URL structure
//                   alt={`Image ${imageId}`}
//                   style={{ width: '200px', height: 'auto', margin: '10px' }}
//                 />
//               ))
//             ) : (
//               <p>No images found</p>
//             )}
//           </div>
//         </div>
//       ) : (
//         <p>Album details not available.</p>
//       )}
//     </div>
//   );
// }

// export default AlbumDetail;

// code 3

import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import AuthContext from "../auth/authContext";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

function AlbumDetail() {
  const { albumname } = useParams(); // Get albumname from the route
  const location = useLocation();
  const navigate = useNavigate();
  const { albumId } = location.state || {}; // Access albumId from the state passed through Link
  const { user } = useContext(AuthContext);

  const [albumDetails, setAlbumDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      try {
        if (albumId) {
          const response = await axios.get(`${API_URL}/getAlbum/${albumId}`, {
            headers: {
              // Authorization: `Bearer ${user?.token}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          });

          console.log("album details: ---->", response);

          if (response.data.success) {
            setAlbumDetails(response.data.data);
          } else {
            setError("Failed to fetch album details");
          }
        }
      } catch (error) {
        setError("Error fetching album details: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    if (albumId) {
      fetchAlbumDetails();
    }
  }, [albumId, user?.token]); // Add user?.token to the dependency array to refetch if token changes

  if (loading) {
    return <p>Loading album details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mx-auto w-full max-w-7xl">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 p-2.5 bg-orange-600 text-white border-none rounded-md cursor-pointer"
      >
        Back
      </button>
      <h1>Album: {albumname}</h1>
      {albumDetails ? (
        <div>
          <p>Name: {albumDetails.name}</p>
          <p>Created By: {albumDetails.createdBy}</p>
          <p>
            Created At: {new Date(albumDetails.createdAt).toLocaleDateString()}
          </p>
          <p>
            Updated At: {new Date(albumDetails.updatedAt).toLocaleDateString()}
          </p>
          <div>
            {albumDetails.imageUrls.length > 0 ? (
              albumDetails.imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Image ${index}`}
                  style={{ width: "200px", height: "auto", margin: "10px" }}
                />
              ))
            ) : (
              <p>No images found</p>
            )}
          </div>
        </div>
      ) : (
        <p>Album details not available.</p>
      )}
    </div>
  );
}

export default AlbumDetail;
