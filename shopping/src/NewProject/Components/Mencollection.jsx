import React from 'react'

const Mencollection = (props) => {
    const {title,image5,image6, image7, image8}= props.gentsFashion
  return (
    <div>
    
    <div className="childimg" >
    <h2>{title}</h2>
      <img src={image5} alt="" class="img-thumbnail img-fluid " />
      <img src={image6} alt="" class="img-thumbnail img-fluid " />
      <img src={image7} alt="" class="img-thumbnail img-fluid " />
      <img src={image8} alt="" class="img-thumbnail img-fluid " />
      
    </div>
    </div>
  )
}

export default Mencollection
