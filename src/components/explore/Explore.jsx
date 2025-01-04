// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import ImageModal from "../../utility/ImageModal"; // Import the new ImageModal
// import { fetchPublicImages } from "../../features/publicImagesSlice";
// import {addImageToAlbum} from "../../features/albumSlice"
// import { useDispatch, useSelector } from "react-redux";

// const API_URL = import.meta.env.VITE_API_URL;

// function Explore() {
//   const dispatch = useDispatch();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const publicImg = useSelector((state) => state.publicImg.images);
//   const loading = useSelector((state) => state.publicImg.loading);
//   const error = useSelector((state) => state.publicImg.error);
//   const user = useSelector((state) => state.auth.user);

//   const {images} = useSelector((state)=> state.publicImg);

//   useEffect(() => {
//     dispatch(fetchPublicImages());
//   }, [dispatch]);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//     setIsModalOpen(true);
//   };

//   const handleAddToAlbum = ()=>{
    
//   }

//   // useEffect(()=>{
//   //     dispatch(addImageToAlbum())
//   // })

//   if (loading) {
//     return <div className="text-center py-8 text-gray-500">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-8 text-red-600">Error: {error}</div>;
//   }

//   return (
//     <div className="mx-auto w-full px-4 py-6">
//       <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
//         Explore
//       </h1>
//       {/* <h1>{console.log("selectedImage--<",selectedImage?._id)}</h1> */}
//       {console.log("publicImg=>",publicImg)}
//       {publicImg.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {publicImg.map((image, index) => (
//             <div
//               key={image._id}
//               className={`relative bg-white shadow-md rounded-lg overflow-hidden ${
//                 index === 0
//                   ? "md:col-span-2 md:row-span-2"
//                   : index === 1
//                   ? "md:col-span-1 md:row-span-1"
//                   : index === 2
//                   ? "md:col-span-1 md:row-span-2"
//                   : index === 3
//                   ? "md:col-span-2 md:row-span-1"
//                   : "md:col-span-1 md:row-span-1"
//               }`}
//               onClick={() => handleImageClick(image)}
//             >
//               <img
//                 src={image.imgurl}
//                 alt="Public image"
//                 className="w-full h-full object-cover cursor-pointer"
//               />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center py-8 text-gray-600">No images available.</p>
//       )}
//       {console.log("selectedImage===", selectedImage)}
//       <ImageModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         imageSrc={selectedImage?.imgurl}
//         imageId={selectedImage?._id}
//         onAddToAlbum={handleAddToAlbum}
//       />
//     </div>
//   );
// }

// export default Explore;


// code 2

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublicImages } from "../../features/publicImagesSlice";
import ImageModal from "../../utility/ImageModal";

function Explore() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { images: publicImages, loading, error } = useSelector(
    (state) => state.publicImg
  );

  useEffect(() => {
    dispatch(fetchPublicImages());
  }, [dispatch]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  if (loading) {
    return <div className="text-center py-8 text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="mx-auto w-full px-4 py-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Explore
      </h1>
      {publicImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {publicImages.map((image, index) => (
            <div
              key={image._id}
              className={`relative bg-white shadow-md rounded-lg overflow-hidden cursor-pointer`}
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.imgurl}
                alt="Public image"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center py-8 text-gray-600">No images available.</p>
      )}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={selectedImage?.imgurl}
        imageId={selectedImage?._id}
      />
    </div>
  );
}

export default Explore;
