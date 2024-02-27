import { Link } from "react-router-dom";

const MainCard=(props)=>{ 
  const {tilesMainData}=props;
    return ( 
      <div className='tile-card'>
      <img className='tile-logo' alt='tile-logo' src={tilesMainData.avatar}/>
      <h3>{tilesMainData.name}</h3>
      <Link to="/subproducts">click</Link>
      </div>
  );
}
export default MainCard;

