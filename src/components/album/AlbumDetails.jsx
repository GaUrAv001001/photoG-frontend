// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useState, useContext } from "react";
// import {
//   fetchAlbumDetails,
//   fetchAlbums,
//   resetAlbumDetails,
// } from "../../features/albumSlice";
// import { useDispatch, useSelector } from "react-redux";
// const API_URL = import.meta.env.VITE_API_URL;

// function AlbumDetail() {
//   const dispatch = useDispatch();
//   const { albumname } = useParams(); // Get albumname from the route
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { albumId } = location.state || {}; // Access albumId from the state passed through Link
//   const user = useSelector((state) => state.auth.user);
//   const { albumDetails, loading, error } = useSelector((state) => state.albums);

//   useEffect(() => {
//     const fetchAlbumDetails = async () => {
//       if (albumId) {
//         dispatch(fetchAlbumDetails(albumId));
//       }

//       return () => {
//         dispatch(resetAlbumDetails());
//       };
//     };
//   }, [albumId, dispatch]); // Add user?.token to the dependency array to refetch if token changes

//   if (loading) {
//     return <p>Loading album details...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className="mx-auto w-full max-w-7xl">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-5 p-2.5 bg-orange-600 text-white border-none rounded-md cursor-pointer"
//       >
//         Back
//       </button>
//       <h1>Album: {albumname}</h1>
//       {albumDetails ? (
//         <div>
//           <p>Name: {albumDetails.name}</p>
//           <p>Created By: {albumDetails.createdBy}</p>
//           <p>
//             Created At: {new Date(albumDetails.createdAt).toLocaleDateString()}
//           </p>
//           <p>
//             Updated At: {new Date(albumDetails.updatedAt).toLocaleDateString()}
//           </p>
//           <div>
//             {albumDetails.imageUrls.length > 0 ? (
//               albumDetails.imageUrls.map((url, index) => (
//                 <img
//                   key={index}
//                   src={url}
//                   alt={`Image ${index}`}
//                   style={{ width: "200px", height: "auto", margin: "10px" }}
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

import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import {
  fetchAlbumDetails,
  fetchAlbums,
  resetAlbumDetails,
} from "../../features/albumSlice";
import { useDispatch, useSelector } from "react-redux";
const API_URL = import.meta.env.VITE_API_URL;

function AlbumDetail() {
  const dispatch = useDispatch();
  const { albumname } = useParams(); // Get albumname from the route
  const location = useLocation();
  const navigate = useNavigate();
  const { albumId } = location.state || {}; // Access albumId from the state passed through Link
  const user = useSelector((state) => state.auth.user);
  const { albums, loading, error } = useSelector((state) => state.albums);

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      if (albumId) {
        dispatch(fetchAlbums());
      }

      return () => {
        dispatch(resetAlbumDetails());
      };
    };
  }, [dispatch]); // Add user?.token to the dependency array to refetch if token changes

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
      <h1>{console.log("albumId-=-=-=?", albumId)}</h1>
      {/* <h1>{console.log("albums--==>", albums[0].name)}</h1> */}
      <h1>
        {albums.map((album) => (
          <div key={album._id}>
            {album._id === albumId ? (
              <h1>
                {album.images.map((img) => (
                  <img src={img.imgurl}></img>
                ))}
              </h1>
            ) : null}
          </div>
        ))}
      </h1>
      <h1></h1>
      {/* {albumDetails ? (
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
      )} */}
    </div>
  );
}

export default AlbumDetail;
