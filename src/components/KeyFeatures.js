  const KeyFeatures = () => {
    return (
      <section className=" bg-gray-50 pb-20">
        <div className="container mx-auto flex flex-col gap-5">
          <h2 className="text-4xl py-14 text-center font-semibold text-gray-700">
            Key Features
          </h2>
          <div className="grid grid-cols-4 gap-10 justify-between">
            <div className="text-center  flex flex-col gap-3 bg-gray-100 py-10 px-4">
              <div className="flex justify-center">
                {/* <FaGlobe className="text-7xl text-gray-700" /> */}
              </div>
              <h1 className="text-2xl text-gray-900 font-semibold">
              High-Quality Material
              </h1>
              <p className="text-gray-700 text-lg">
              Highlight the cooker's construction material (e.g., stainless steel, aluminum) known for durability and even heat distribution.
              </p>
            </div>
            <div className="text-center flex flex-col gap-3 bg-gray-100 py-10 px-4">
              <div className="flex justify-center">
              </div>
              <h1 className="text-2xl font-semibold">
                Safety Features</h1>
              <p className="text-gray-700 text-lg">
              Emphasize safety aspects such as pressure release valves, lid locks, and heat-resistant handles, ensuring secure and worry-free cooking.
              </p>
            </div>
            <div className="text-center flex flex-col gap-3 bg-gray-100 py-10 px-4">
              <div className="flex justify-center">
                
              </div>
              <h1 className="text-2xl font-semibold">Capacity and Size</h1>
              <p className="text-gray-700 text-lg">
              Clearly state the cooker's capacity (in liters/quarts) and dimensions, enabling customers to gauge its suitability for their cooking needs and kitchen space.
              </p>
            </div>
            <div className="text-center flex flex-col gap-3 bg-gray-100 py-10 px-4">
              <div className="flex justify-center">
                
              </div>
              <h1 className="text-2xl font-semibold">Accompanying Accessories</h1>
              <p className="text-gray-700 text-lg">
              Mention any additional accessories provided with the cooker, such as steamer baskets, measuring cups, recipe books, or spatulas.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default KeyFeatures;