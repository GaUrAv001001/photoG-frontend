import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../auth/authContext';
import ImageModal from '../../utility/ImageModal'; // Import the new ImageModal

const API_URL = import.meta.env.VITE_API_URL;

function Explore() {
  const [publicImg, setPublicImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPublicImg = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(`${API_URL}/get-public-images`, {
          withCredentials: true,
        });

        if (response.status === 200) {
          const data = response.data;
          setPublicImg(data.data);
        } else {
          throw new Error(`Error fetching public images! Status: ${response.status}`);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

      fetchPublicImg();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleAddToAlbum = () => {
    // Implement add to album functionality here
  };

  if (loading) {
    return <div className="text-center py-8 text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="mx-auto w-full px-4 py-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Explore</h1>
      {publicImg.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {publicImg.map((image, index) => (
            <div
              key={image._id}
              className={`relative bg-white shadow-md rounded-lg overflow-hidden ${
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : index === 1
                  ? "md:col-span-1 md:row-span-1"
                  : index === 2
                  ? "md:col-span-1 md:row-span-2"
                  : index === 3
                  ? "md:col-span-2 md:row-span-1"
                  : "md:col-span-1 md:row-span-1"
              }`}
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.imgurl}
                alt="Public image"
                className="w-full h-full object-cover cursor-pointer"
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
        onAddToAlbum={handleAddToAlbum}
      />
    </div>
  );
}

export default Explore;