import React from 'react'

const Womencollection = (props) => {
    const {title, image9,image10, image11, image12}= props.womenFashion
  return (
    <div>
    
    <div className="childimg" >
    <h2>{title}</h2>
      <img src={image9} alt="" class="img-thumbnail img-fluid " />
      <img src={image10} alt="" class="img-thumbnail img-fluid " />
      <img src={image11} alt="" class="img-thumbnail img-fluid " />
      <img src={image12} alt="" class="img-thumbnail img-fluid " />
      
    </div>
    </div>
  )
}

export default Womencollection
