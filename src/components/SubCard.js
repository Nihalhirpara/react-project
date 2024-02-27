const SubCard=(props)=>{
    const {tilesData}=props;
    return(
        <div className='tile-card'>
        <img className='tile-logo' alt='tile-logo' src={tilesData.timage}/>
        <h3>{tilesData.tname}</h3>
        </div>
    );
}
export default SubCard;