import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress = (progress) =>{
    this.setState({progress:progress});
  }
   pageSize = 15;
   apiKey = process.env.REACT_APP_NEWS_API

  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height = {3}
      />
        <Routes>
            {/* <News setProgress={this.setProgress} pageSize={5} country = 'in' category = 'science'/> */}
            <Route path="/" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = 'general' pageSize={this.pageSize} country = 'in' category = 'general'/>} />
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = 'business' pageSize={this.pageSize} country = 'in' category ='business'/>}/>
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = 'entertainment' pageSize={this.pageSize} country = 'in' category ='entertainment'/>}/>
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = 'general' pageSize={this.pageSize} country = 'in' category ='general'/>}/>
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = 'health' pageSize={this.pageSize} country = 'in' category ='health'/>}/>
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = 'science' pageSize={this.pageSize} country = 'in' category ='science'/>}/>
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = 'sports' pageSize={this.pageSize} country = 'in' category ='sports'/>}/>
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = 'technology' pageSize={this.pageSize} country = 'in' category ='technology'/>}/>  
        </Routes>
      </div>
    )
  }
}

