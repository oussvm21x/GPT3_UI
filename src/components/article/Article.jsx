import React from 'react'
import './article.css'

const Article = ( {src , date , title , foot } ) => {
  return (
    <div className="gpt3__article ">
      <div className="gpt3__article-container">
        <img src={src} alt={src} />
        <div className="gpt3__article-container_content">
          <div className="gpt3__article-container_content-header">
            <p>{date}</p>
            <h1>{title}</h1>
          </div>
          <div className="gpt3__article-container_content-footer">
            <p>{foot}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article