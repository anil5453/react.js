import React from 'react'

const Collections = (props) => {
  const {title, image1,image2,image3,image4}= props.childFashion
  return (
    <div>
    <h2>{title}</h2>
    <div className="childimg" >
      <img src={image1} alt={title} class="img-thumbnail img-fluid " />
      <img src={image2} alt={title} class="img-thumbnail img-fluid "  />
      <img src={image3} alt={title} class="img-thumbnail img-fluid " />
      <img src={image4} alt={title} class="img-thumbnail img-fluid " />
    </div>
    </div>
  )
}

export default Collections
