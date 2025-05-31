import React from "react";
import { Link } from "react-router-dom";
import photogA from "../../images/photogA.png";
import "../../index.css";

export default function Home() {
  return (
    <div className="mx-10 mt-20">
      <div className="flex flex-col justify-around items-center">
        <div className="text-center">
          <h1 className="text-4xl m-1 font-serif">
            Welcome to Photo<span className="text-[#FFD500]">G</span>
          </h1>
          <h2 className="text-lg m-1 text-[#4e4e4e]">
            Platform where you can explore and add photos
          </h2>
          <h2 className="text-lg m-1 text-[#4e4e4e]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            a voluptas totam modi eos alias.
          </h2>
        </div>
        <div className="hidden md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 mt-5">
          <div className="relative group">
            <img
              className="rounded-lg h-72 object-cover w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              // src="https://img.freepik.com/free-photo/beautiful-wooden-pathway-going-breathtaking-colorful-trees-forest_181624-5840.jpg?t=st=1736008051~exp=1736011651~hmac=efa17415c15e96bf59f8e95f79829ca65ef882593a8af0b6c9d66f84ce5cc136&w=1380"
              src="https://images.pexels.com/photos/944440/pexels-photo-944440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="relative group">
            <img
              className="rounded-lg h-72 object-cover w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              // src="https://img.freepik.com/free-photo/beautiful-wooden-pathway-going-breathtaking-colorful-trees-forest_181624-5840.jpg?t=st=1736008051~exp=1736011651~hmac=efa17415c15e96bf59f8e95f79829ca65ef882593a8af0b6c9d66f84ce5cc136&w=1380"
              src="https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="relative group">
            <img
              className="rounded-lg h-72 object-cover w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              // src="https://img.freepik.com/free-photo/beautiful-wooden-pathway-going-breathtaking-colorful-trees-forest_181624-5840.jpg?t=st=1736008051~exp=1736011651~hmac=efa17415c15e96bf59f8e95f79829ca65ef882593a8af0b6c9d66f84ce5cc136&w=1380"
              src="https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        {/* small screen */}
        <div className="md:hidden grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
          <div className="relative group">
            <img
              className="rounded-lg object-cover h-64 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              src="https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Scenic Landscape"
            />
          </div>
          <div className="relative group">
            <img
              className="rounded-lg object-cover h-64 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Beautiful Sunset"
            />
          </div>
          <div className="relative group">
            <img
              className="rounded-lg object-cover h-64 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              src="https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Forest Path"
            />
          </div>
          <div className="relative group">
            <img
              className="rounded-lg object-cover h-64 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              src="https://images.pexels.com/photos/944440/pexels-photo-944440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mountain View"
            />
          </div>
          <div className="relative group">
            <img
              className="rounded-lg object-cover h-64 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              src="https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Lake Reflection"
            />
          </div>
          <div className="relative group">
            <img
              className="rounded-lg object-cover h-64 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              src="https://images.pexels.com/photos/181624/pexels-photo-181624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Beach Vibes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
