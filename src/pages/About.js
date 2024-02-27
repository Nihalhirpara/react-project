// import React from "react";
// import Whyme from "../components/Whyme";
// // import Herotext from "../components/Herotext";
// const About = () => {
//   return (
//     <>
//       {/* <Herotext text="About Us" /> */}
//       <section className="bg-gray-50 py-20 px-20 relative">
//         <div className="absolute inset-0 overflow-hidden">
//           <img
//             src="https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
//             alt="Your Image"
//             className="w-full h-full object-cover object-center"
//           />
//         </div>
//         <div className="container mx-auto grid grid-cols-2 relative z-10">
//           <div className="flex flex-col justify-center">
//             <div className="flex flex-col gap-3">
//               <h1 className="text-6xl font-semibold text-gray-700">
//                 Who we are?
//               </h1>
//               <p className="text-lg text-gray-700">
//                 We are a team of passionate individuals committed to providing
//                 high-quality products and exceptional customer service. Our
//                 mission is to make technology accessible to everyone, no matter
//                 where they are in the world. Shop with us and experience the
//                 difference of working with a dedicated and customer-centric
//                 team.
//               </p>
//             </div>
//           </div>
//           <div>
//             <img
//               className="w-[80%] mx-auto"
//               src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
//               alt="team img"
//             />
//           </div>
//         </div>
//       </section>
//       <Whyme />
//     </>
//   );
// };

// export default About;

// import React from "react";
// import Whyme from "../components/Whyme";
// // import Herotext from "../components/Herotext";

// const About = () => {
//   return (
//     <>
//       {/* <Herotext text="About Us" /> */}
//       <section className="bg-gray-50 py-20 px-20 relative">
//         <div className="relative">
//           <img
//             src="https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
//             alt="Your Image"
//             className="w-full h-full object-cover object-center"
//           />
//         </div>
//         <div className="container mx-auto grid grid-cols-2 mt-10">
//           <div className="flex flex-col justify-center">
//             <div className="flex flex-col gap-3">
//               <h1 className="text-6xl font-semibold text-gray-700">
//                 Who we are?
//               </h1>
//               <p className="text-lg text-gray-700">
//                 We are a team of passionate individuals committed to providing
//                 high-quality products and exceptional customer service. Our
//                 mission is to make technology accessible to everyone, no matter
//                 where they are in the world. Shop with us and experience the
//                 difference of working with a dedicated and customer-centric
//                 team.
//               </p>
//             </div>
//           </div>
//           <div>
//             <img
//               className="w-[80%] mx-auto"
//               src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
//               alt="team img"
//             />
//           </div>
//         </div>
//       </section>
//       <Whyme />
//     </>
//   );
// };

// export default About;
import React from "react";
import Whyme from "../components/Whyme";
// import Herotext from "../components/Herotext";

const About = () => {
  return (
    <>
      {/* <Herotext text="About Us" /> */}
      <section className="bg-gray-50 py-20 px-20 h-60">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-auto"
            src="https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="First image"
          />
        </div>
      </section>
      <section className="bg-gray-50 py-20 px-20">
        <div className="container mx-auto grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-3">
              <h1 className="text-6xl font-semibold text-gray-700">
                Who we are?
              </h1>
              <p className="text-lg text-gray-700">
                We are a team of passionate individuals committed to providing
                high-quality products and exceptional customer service. Our
                mission is to make technology accessible to everyone, no matter
                where they are in the world. Shop with us and experience the
                difference of working with a dedicated and customer-centric
                team.
              </p>
            </div>
          </div>
          <div>
            <img
              className="w-[80%] mx-auto"
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Second image"
            />
          </div>
        </div>
      </section>
      <Whyme />
    </>
  );
};

export default About;
