import React from 'react'

import { Article, Brand, CTA, Feature, Navbar } from './components/index'
import { Blog, Features, Footer, Header, Possibility, WhatGpt } from "./containers"
import './App.css'
import './index.css'
const App = () => {
    return (
        <div className='App'>
            <div className='gradient_bg'>
                <Navbar></Navbar>
                <Header></Header>
            </div>
            <Brand></Brand>
            <WhatGpt></WhatGpt>
            <Features></Features>
            <Possibility></Possibility>
            <CTA></CTA>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    )
}

export default App