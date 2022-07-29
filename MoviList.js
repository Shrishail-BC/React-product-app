import React from 'react'

const MoviList = (props) => {
  const {Title ,Year,Poster,imdbID}=props.movie
  return (
    <div onClick={()=>props.onMoviselect(imdbID)} className='d-flex flex-column p-2 m-3 box bg-white bor'>
      <img className='www' src={Poster}/>
      <h2 className='name'>{Title}</h2>
    </div>
  )
}
 
export default MoviList ;