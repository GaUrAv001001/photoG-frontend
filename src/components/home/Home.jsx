import React from "react";
import { Link } from "react-router-dom";
import photogA from "../../images/photogA.png";
import '../../index.css'

export default function Home() {
  return (
    <div className="mx-10 mt-20">
      <div className="flex flex-col justify-around items-center">
        <div className="text-center">
          <h1 className="text-4xl m-1 font-serif">Welcome to Photo<span className="text-[#FFD500]">G</span></h1>
          <h2 className="text-lg m-1 text-[#4e4e4e]">Platform where you can explore and add photos</h2>
          <h2 className="text-lg m-1 text-[#4e4e4e]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis a voluptas totam modi eos alias.</h2>
        </div>
        <div className="flex">
          <div className="m-4 bg-contain">
            <img
            className="rounded h-72"
              src="https://img.freepik.com/free-photo/beautiful-wooden-pathway-going-breathtaking-colorful-trees-forest_181624-5840.jpg?t=st=1736008051~exp=1736011651~hmac=efa17415c15e96bf59f8e95f79829ca65ef882593a8af0b6c9d66f84ce5cc136&w=1380"
              alt=""
            />
          </div>
          <div className="m-4 bg-contain">
            <img
            className="rounded h-72"
              src="https://img.freepik.com/free-photo/beautiful-wooden-pathway-going-breathtaking-colorful-trees-forest_181624-5840.jpg?t=st=1736008051~exp=1736011651~hmac=efa17415c15e96bf59f8e95f79829ca65ef882593a8af0b6c9d66f84ce5cc136&w=1380"
              alt=""
            />
          </div>
          <div className="m-4 bg-contain">
            <img
            className="rounded h-72"
              src="https://img.freepik.com/free-photo/beautiful-wooden-pathway-going-breathtaking-colorful-trees-forest_181624-5840.jpg?t=st=1736008051~exp=1736011651~hmac=efa17415c15e96bf59f8e95f79829ca65ef882593a8af0b6c9d66f84ce5cc136&w=1380"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
