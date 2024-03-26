import React from 'react'

import './feature.css'

const Feature = ({title , text}) => {
  return (
    <div className="gpt3__feature-contaienr">
      
      <div className="gpt3__feature-container-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="gpt3__feature-container-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature