import { useEffect, useState } from "react";
import SubCard from "./SubCard";

const SubProducts=(props)=>{
    const [apiData, setApiData] = useState([]);

    useEffect(()=>{
      callAPI ();
    },[]);
  
    const callAPI = async() => {
      const data=await fetch('https://65866fd9468ef171392e4083.mockapi.io/tiles');
      const json=await data.json();
      console.log(json);
      setApiData(json);
    };
    return(
        <div className="card-list">
    {apiData.map((card) => (
      <SubCard key={card.tid} tilesData={card}/>
    ))}
  </div>
    );
}
export default SubProducts;