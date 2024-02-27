import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Homeimg = () => {
  const navigate = useNavigate();
  return (
    <section className="Offer1 flex flex-col justify-center items-center h-[30rem] pb-20">
      <div className="flex container mx-auto flex-col gap-10 justify-center w-[90%] ">
        <h3 class="textcolor text-6xl font-semibold text-gray-50">
        Transform meals into moments 
        </h3>
        <h3 class="textcolor text-6xl font-semibold text-gray-50">
        with our premium cookers.
        </h3>
      </div>
      
    </section>
    
  );
};

export default Homeimg;
