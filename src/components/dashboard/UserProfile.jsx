import React from "react";

const UserProfile = () => {
  return (
    <div className="relative flex-col max-h-full items-top justify-center sm:items-center sm:pt-0">
      {/* section 1 */}
      <div className="flex justify-center items-center mt-20 mx-auto sm:px-6 lg:px-8">
        <img
          className="h-80 w-80 object-cover rounded-full"
          src="https://img.freepik.com/free-photo/young-bearded-man-with-round-glasses-denim-shirt_273609-12127.jpg?t=st=1740998246~exp=1741001846~hmac=4deed9fa71984cc0e9c5ef59b36722ecfbdcd98b43f5dd29f8584c13ed79dedf&w=1060"
          alt=""
        />
      </div>

      {/* section 2 */}
      <div className="flex justify-center mt-3 items-center mx-auto sm:px-6 lg:px-8">
        <p className="text-4xl font-serif m-4">Gaurav Hiwarale</p>
      </div>

      {/* section 3 */}
      <div className="flex justify-center items-center mx-auto sm:px-6 lg:px-8">
        <p className="flex items-center justify-center text-lg font-serif m-2 text-[#CDCDCD] max-w-sm text-center whitespace-normal">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          magni is?
        </p>
      </div>

      {/* section 4 */}
      <div className="flex justify-center items-center mt-10">
        <div className="font-serif mx-20 flex flex-col items-center">
          <p className="text-xl text-[#8e8e8e] m-2">Total images</p>
          <p className="text-2xl">100</p>
        </div>
        <p className="bg-[#4e4e4e] text-[#4e4e4e] h-10 rounded">.</p>
        <div className="font-serif mx-20 flex flex-col items-center">
          <p className="text-xl text-[#8e8e8e] m-2">Total album</p>
          <p className="text-2xl">10</p>
        </div>
        <p className="bg-[#4e4e4e] text-[#4e4e4e] h-10 rounded">.</p>
        <div className="font-serif mx-20 flex flex-col items-center">
          <p className="text-xl text-[#8e8e8e] m-2">Role</p>
          <p className="text-xl">admin</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
