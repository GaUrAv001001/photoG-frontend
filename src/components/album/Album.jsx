import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "../../utility/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAlbums,
  createAlbum,
  resetAlbumCreated,
  deleteAlbum,
} from "../../features/albumSlice";

const API_URL = import.meta.env.VITE_API_URL;

function Album() {
  const dispatch = useDispatch();
  const { albums, loading, error, albumCreated } = useSelector(
    (state) => state.albums
  );
  const currentUser = useSelector((state) => state.auth.user);

  const [isModelOpen, setIsModalOpen] = useState(false);
  const [newAlbumName, setNewAlbumName] = useState("");

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  useEffect(() => {
    if (albumCreated) {
      dispatch(fetchAlbums());
      dispatch(resetAlbumCreated());
    }
  }, [albumCreated, dispatch]);

  const handleCreateAlbum = async () => {
    if (newAlbumName.trim === "") {
      alert("Album name cant be empty!");
      return;
    }

    dispatch(createAlbum({ name: newAlbumName, createdBy: currentUser._id }));
    setNewAlbumName("");
    setIsModalOpen(false);
  };

  const handleDeleAlbum = async (albumId) => {
    dispatch(deleteAlbum(albumId));
  };

  const handleInputChange = (e) => {
    setNewAlbumName(e.target.value);
  };

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="mx-auto w-full max-w-7xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Albums</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-orange-600 text-white px-4 py-4 rounded-lg mb-6"
      >
        Create Album
      </button>
      {console.log("albums in album: ", albums)}
      {albums.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {albums.map((album) => (
            <div
              key={album._id}
              className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <Link
                // key={album._id}
                to={`/album/${album.name}`}
                state={{ albumId: album._id }} // Passing album ID in state
              >
                <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                  <img
                    src="https://img.freepik.com/free-vector/empty-photo-frame-stylish-background_1017-17880.jpg?t=st=1726252323~exp=1726255923~hmac=dcf12dea011c4276ae9c83e18b0511261d9a66adc611343698ded770cf6e9498&w=740"
                    alt={album.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {album.name}
                    </h2>
                  </div>
                </div>
              </Link>
              <button
                onClick={() => handleDeleAlbum(album._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg w-full mt-2"
              >
                Delete Album
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center py-4 text-gray-600">No albums available.</p>
      )}

      <Modal isOpen={isModelOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">Create New Album</h2>
        <input
          type="text"
          value={newAlbumName}
          onChange={handleInputChange}
          placeholder="Album Name"
          className="w-full border border-gray-300 p-2 rounded-lg mb-4"
        />
        <button
          onClick={handleCreateAlbum}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Create Album
        </button>
      </Modal>
    </div>
  );
}

export default Album;
