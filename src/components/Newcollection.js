import { useState } from "react";
import React from 'react'

class Newcollection extends React. Component {
  render() {
    // return (
    //       <section className="container mx-auto">
    //   <h2 className="text-4xl py-10 text-center font-medium text-gray-1000">
    //     New Collection
    //   </h2>
    //   <div class="imagee">
    //     <img src="http://shinemica.com/wp-content/uploads/2021/08/4406.jpg" />
        
    //   </div>
     
    // </section>
    // )

    return (
    <section className=" bg-gray-50 pb-20">
      <div className="container mx-auto flex flex-col gap-5">
        <h2 className="text-4xl py-14 text-center font-semibold text-gray-700">
          New Collection
        </h2>
        <div className="grid grid-cols-3 gap-10 justify-between">
          <div className="photo text-center flex flex-col gap-3 bg-gray-100">
            <img src="https://media.istockphoto.com/id/1054350494/photo/the-scale-casserole.jpg?s=612x612&w=0&k=20&c=u6sF7rz_jO_4yOg5CvmUvmzDbwuSVPVAhVG6_s4rg-w=" />
          </div>
          <div className=" text-center flex flex-col gap-3 bg-gray-100">
            <img src="https://media.istockphoto.com/id/468318498/photo/pressure-cooker-stainless-steel.jpg?s=612x612&w=0&k=20&c=_AUwvqOkqA4bAtbeonrJl6LiOPIJ78uEPgOUVFZxFLc=" />
          </div>
          <div className="text-center flex flex-col gap-3 bg-gray-100">
            <img src="https://media.istockphoto.com/id/1030922384/photo/electric-pressure-cooker-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=3MEErh9Wc1j_N1AJVDhNKzvkemBCIVme45eYIha3z0Q=" />
          </div>
        </div>
      </div>
    </section>
  );
  }
}

export default Newcollection