import React from 'react'
import { blog1 , blog2 , blog3 , blog4 , blog5 } from './pics'
import './blog.css'
import { Article } from '../../components'

const Blog = () => {
  return (
    <div className="gpt3__blog section_padding">
      <div className="gpt3__blog-header">
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog_container">
        <Article src = {blog1} date = {'Sep 26, 2021'} title = {'GPT-3 and Open  AI is the future. Let us exlore how it is?'} foot = {'Read Full Article'}></Article>
        <Article src = {blog2} date = {'Sep 26, 2021'} title = {'GPT-3 and Open  AI is the future. Let us exlore how it is?'} foot = {'Read Full Article'}></Article>
        <Article src = {blog3} date = {'Sep 26, 2021'} title = {'GPT-3 and Open  AI is the future. Let us exlore how it is?'} foot = {'Read Full Article'}></Article>
        <Article src = {blog4} date = {'Sep 26, 2021'} title = {'GPT-3 and Open  AI is the future. Let us exlore how it is?'} foot = {'Read Full Article'}></Article>
        <Article src = {blog5} date = {'Sep 26, 2021'} title = {'GPT-3 and Open  AI is the future. Let us exlore how it is?'} foot = {'Read Full Article'}></Article>

      </div>
    </div>
  )
}

export default Blog