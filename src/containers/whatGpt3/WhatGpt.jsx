import React from 'react'
import './whatGpt.css'
import { Feature } from '../../components'

const WhatGpt = () => {
  return (
    <div className="gpt3__whatGpt section_margin">
      <div className="gpt3__whatGpt-feature">
        <Feature title = {'What is GPT-3'} text = {'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'}></Feature>
      </div>
      <div className="gpt3__whatGpt-heading ">
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatGpt-container">
        <Feature title = {'Chatbots'} text = {'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '}></Feature>
        <Feature title = {'Knowledgebase'} text = {'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'}></Feature>
        <Feature title = {'Education'} text = {'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'}></Feature>
      </div>
    </div>
  )
}

export default WhatGpt