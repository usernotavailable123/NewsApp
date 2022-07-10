import './App.css';
import { Routes, Route } from "react-router-dom";

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress,setProgress] = useState(0)
   const pageSize = 3;
   const apiKey = process.env.REACT_APP_NEWS_API
    return (
      <div>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
        height = {3}
      />
        <Routes>
            {/* <News setProgress={this.setProgress} pageSize={5} country = 'in' category = 'science'/> */}
            <Route path="/" element={<News setProgress={setProgress} apiKey = {apiKey} key = 'general' pageSize={pageSize} country = 'in' category = 'general'/>} />
            <Route path="/business" element={<News setProgress={setProgress} apiKey = {apiKey} key = 'business' pageSize={pageSize} country = 'in' category ='business'/>}/>
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey = {apiKey} key = 'entertainment' pageSize={pageSize} country = 'in' category ='entertainment'/>}/>
            <Route path="/general" element={<News setProgress={setProgress} apiKey = {apiKey} key = 'general' pageSize={pageSize} country = 'in' category ='general'/>}/>
            <Route path="/health" element={<News setProgress={setProgress} apiKey = {apiKey} key = 'health' pageSize={pageSize} country = 'in' category ='health'/>}/>
            <Route path="/science" element={<News setProgress={setProgress} apiKey = {apiKey} key = 'science' pageSize={pageSize} country = 'in' category ='science'/>}/>
            <Route path="/sports" element={<News setProgress={setProgress} apiKey = {apiKey} key = 'sports' pageSize={pageSize} country = 'in' category ='sports'/>}/>
            <Route path="/technology" element={<News setProgress={setProgress} apiKey = {apiKey} key = 'technology' pageSize={pageSize} country = 'in' category ='technology'/>}/>  
        </Routes>
      </div>
    )
  }

  export default App;
