// import React, { useState, useEffect, useContext } from "react";
// import ReactDOM from "react-dom";
// import { fetchAlbums, addImageToAlbum } from "../features/albumSlice";
// import { useDispatch, useSelector } from "react-redux";

// const API_URL = import.meta.env.VITE_API_URL;

// function ImageModal({ isOpen, onClose, imageSrc, imageId, onAddToAlbum }) {
//   const dispatch = useDispatch()
//   const {albums, loading, error} = useSelector((state)=>state.albums);
//   // const [albums, setAlbums] = useState([]);
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const user = useSelector((state)=> state.auth.user);
//   const {publicImg} = useSelector((state)=> state.publicImg.images)

//   useEffect(() => {
//     if (isOpen) {
//       dispatch(fetchAlbums())
//     }
//   }, [isOpen, dispatch]);

//   const handleAddToAlbum = () => {
//     if (selectedAlbum) {
//       console.log("selectedAlbum=> ", selectedAlbum)
//       console.log("imageId=> ", imageId)
//         dispatch(addImageToAlbum(selectedAlbum, imageId))
//     }
//   };


//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       <div
//         className="fixed inset-0 bg-gray-800 opacity-75"
//         onClick={onClose}
//       ></div>
//       <div className="relative bg-white p-4 rounded-lg shadow-lg w-full max-w-screen-md h-full flex flex-col">
//         <button
//           className="absolute top-3 right-3 text-gray-200 hover:text-gray-900"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         {console.log("publicImg=> ",publicImg)}
//         <img
//           src={imageSrc}
//           alt="Selected"
//           className="w-full h-auto object-contain mb-4"
//         />
//         <div className="flex-grow overflow-y-auto">
//           <h2 className="text-xl font-bold mb-2">Select an Album</h2>
//           <ul className="space-y-2">
//             {console.log("hello! ",albums)}
//             {albums.map((album) => (
//               <li
//                 key={album._id}
//                 className={`cursor-pointer text-white text-center font-serif p-2 bg-orange-500 rounded-lg hover:bg-gray-200 ${selectedAlbum === album._id ? 'bg-gray-300' : ''}`}
//                 onClick={() => setSelectedAlbum(album._id)}
//               >
//                 {console.log("vdlknv viusd v: ",album.title)}
//                 {album.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//         {selectedAlbum && (
//           <button
//             onClick={handleAddToAlbum}
//             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
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

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums, addImageToAlbum } from "../features/albumSlice";

function ImageModal({ isOpen, onClose, imageSrc, imageId }) {
  const dispatch = useDispatch();
  const { albums, loading } = useSelector((state) => state.albums);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    if (isOpen) {
      dispatch(fetchAlbums());
    }
  }, [isOpen, dispatch]);

  const handleAddToAlbum = () => {
    if (selectedAlbum) {
      dispatch(addImageToAlbum({ albumId: selectedAlbum, imageId }));
      alert("Image added to album!")
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-800 opacity-75" onClick={onClose}></div>
      <div className="relative bg-white p-4 rounded-lg shadow-lg w-full max-w-screen-md h-full flex flex-col">
        <button
          className="absolute top-3 right-3 text-gray-900 hover:text-red-600"
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
          {loading ? (
            <p>Loading albums...</p>
          ) : (
            <ul className="space-y-2">
              {albums.map((album) => (
                <li
                  key={album._id}
                  className={`cursor-pointer text-center p-2 rounded-lg ${
                    selectedAlbum === album._id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedAlbum(album._id)}
                >
                  {album.name}
                </li>
              ))}
            </ul>
          )}
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
