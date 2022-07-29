import React,{useState, useEffect} from 'react';
import {Container}  from "react-bootstrap";
import axios from 'axios';

const MoviInfo = (props) => {
  const [moviInfo, setMoviInfo]=useState();
  const {selectmovi}=props;

  useEffect(()=>{
      axios
      .get(`https://www.omdbapi.com/?i=${selectmovi}&apikey=f8909cb4`)
      .then((response)=>setMoviInfo(response.data));
  },[selectmovi]);

  return (
    <Container className="contaner p-3 bg-transparent" >
      {moviInfo?<>
        <img className='coverimage' src={moviInfo?.Poster}/>
        <div className='infocolom m-2 '>
      <h2 className='name'>Movi Name:{moviInfo?.Title}</h2>
      <h4 className="info ">year:{moviInfo?.Year} </h4>
      <h4 className="info">Released:{moviInfo?.Released} </h4>
      <h4 className="info">Type: {moviInfo?.Genre} </h4>
      <h4 className="info">Actors: {moviInfo?.Actors} </h4>
      <h4 className="info">Language: {moviInfo?.Language} </h4>
      <h4 className="info">Director: {moviInfo?.Director} </h4>
      <h4 className="info">Country: {moviInfo?.Country} </h4>
      </div>
      <close className="close" onClick={()=>props.onMoviselect()}>x</close>
      </>:"Loading..."}
        
    </Container>
  )
}
 
export default MoviInfo ;