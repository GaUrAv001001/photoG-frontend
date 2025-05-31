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
//                 src={image.imgUrl}
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
//         imageSrc={selectedImage?.imgUrl}
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
import {
  fetchPublicImages,
  uploadImage,
} from "../../features/publicImagesSlice";
import ImageModal from "../../utility/ImageModal";
import UploadImageModal from "../../utility/UploadImageModal";
import "../../index.css";

function Explore() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterImages, setFilterImages] = useState([]);
  const {
    images: publicImages,
    loading,
    error,
  } = useSelector((state) => state.publicImg);

  useEffect(() => {
    dispatch(fetchPublicImages());
  }, [dispatch]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilterImages(publicImages);
    } else {
      const filtered = publicImages.filter((image) =>
        image.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
      );
      // setTimeout(()=>{
      setFilterImages(filtered);
      // }, 1500)
    }
  }, [searchQuery, publicImages]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleUploadClick = (data) => {
    console.log("Submitted data:", data);
    setIsImageModalOpen(true);
  };

  const handleUploadSubmit = (formData) => {
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("isPublic", formData.isPublic);
    data.append("imgUrl", formData.imgUrl);
    dispatch(uploadImage(data));
    alert("Image uploaded!");
    setIsImageModalOpen(false);
  };

  if (loading) {
    return <div className="text-center py-8 text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="mx-auto w-full px-4 py-6 max-w-screen-2xl">
      <div className="flex items-center justify-around w-[100%]">
        <div
          onClick={handleUploadClick}
          className=" w-[10%] mr-5 flex cursor-pointer mb-9 bg-yellow-400 px-4 py-2 rounded"
        >
          Upload IMG<span className="font-bold ml-2">+</span>
        </div>
        <div className="mb-10 flex items-center border border-gray-300 rounded-lg overflow-hidden w-[90%]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={() => setSearchQuery(searchQuery)}
            className="bg-yellow-500 text-black font-thin font-serif px-4 py-2 hover:bg-yellow-600 transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      {/* {filterImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterImages.map((image, index) => (
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
      )} */}

      {filterImages.length > 0 ? (
        <div className="column-1 gap-4 lg:gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-5">
          {filterImages.map((image, index) => (
            <div
              key={image._id}
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.imgurl}
                alt="Public image"
                className="rounded-lg p-1 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center py-8 text-gray-600">No images available.</p>
      )}

{/* {filterImages.length > 0 ? (
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {filterImages.map((image, index) => (
      <div
        key={image._id}
        onClick={() => handleImageClick(image)}
        className="group relative"
      >
        <img
          src={image.imgurl}
          alt="Public image"
          className="rounded-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg mb-5 lg:mb-8"
        />
      </div>
    ))}
  </div>
) : (
  <p className="text-center py-8 text-gray-600">No images available.</p>
)} */}


      {isImageModalOpen && (
        <UploadImageModal
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          // onSubmit={(data) => {
          //   console.log("Submitted data:", data);
          //   setIsImageModalOpen(false);
          // }}
          onSubmit={handleUploadSubmit}
        />
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
