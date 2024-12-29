// import React from "react";
// import ReactDOM from "react-dom";

// function ImageModal({ isOpen, onClose, imageSrc, onAddToAlbum }) {
//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       <div
//         className="fixed inset-0 bg-gray-800 opacity-75"
//         onClick={onClose}
//       ></div>
//       <div className="relative bg-white rounded-lg shadow-lg max-w-screen-md w-full max-h-screen mx-4 my-8 flex flex-col items-center">
//         <button
//           className="absolute top-3 right-5 text-gray-200 hover:text-red-600"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         <img
//           src={imageSrc}
//           alt="Selected"
//           className="w-full h-auto max-w-full max-h-[80vh] object-contain"
//         />
//         {onAddToAlbum && (
//           <button
//             onClick={onAddToAlbum}
//             className="mt-4 mb-2 bg-blue-500 text-white px-4 py-3 rounded-lg"
//           >
//             Add to Album
//           </button>
//         )}
//       </div>
//     </div>,
//     document.body
//   );
// }

// export default ImageModal;




// code 2

import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import AuthContext from "../components/auth/authContext"; // Ensure this import is correct

const API_URL = import.meta.env.VITE_API_URL;

function ImageModal({ isOpen, onClose, imageSrc, onAddToAlbum }) {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const { user } = useContext(AuthContext); // Ensure AuthContext is used

  useEffect(() => {
    if (isOpen) {
      const fetchAlbums = async () => {
        try {
          const response = await axios.get(`${API_URL}/get-album`, {
            headers: {
              'Authorization': `Bearer ${user?.token}`,
              "Content-Type": 'application/json',
            },
            withCredentials: true,
          });
          if (response.status === 200) {
            setAlbums(response.data.data);
          } else {
            throw new Error(`Error fetching albums! Status: ${response.status}`);
          }
        } catch (err) {
          console.error(err.message);
        }
      };
      fetchAlbums();
    }
  }, [isOpen, user?.token]);

  const handleAddToAlbum = () => {
    if (selectedAlbum) {
      onAddToAlbum(selectedAlbum);
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-gray-800 opacity-75"
        onClick={onClose}
      ></div>
      <div className="relative bg-white p-4 rounded-lg shadow-lg w-full max-w-screen-md h-full flex flex-col">
        <button
          className="absolute top-3 right-3 text-gray-200 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={imageSrc}
          alt="Selected"
          className="w-full h-auto object-contain mb-4"
        />
        <div className="flex-grow overflow-y-auto">
          <h2 className="text-xl font-bold mb-2">Select an Album</h2>
          <ul className="space-y-2">
            {albums.map(album => (
              <li
                key={album._id}
                className={`cursor-pointer p-2 rounded-lg hover:bg-gray-200 ${selectedAlbum === album._id ? 'bg-gray-300' : ''}`}
                onClick={() => setSelectedAlbum(album._id)}
              >
                {console.log("vdlknv viusd v: ",album.title)}
                {album.title}
              </li>
            ))}
          </ul>
        </div>
        {selectedAlbum && (
          <button
            onClick={handleAddToAlbum}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add to Album
          </button>
        )}
      </div>
    </div>,
    document.body
  );
}

export default ImageModal;
