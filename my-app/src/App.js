import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import Navigation from './components/navigation/navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

class App extends Component {
  constructor() { // functionality to search 
    super();
    this.state = {
      input: '',
    }
  } 
  
  onInputChange = (event) => {
    console.log(event.target.value);
  } 

  onButtonSubmit = () => {
    console.log('click')
  }

  render() {
    return (
    <div className="App">
      <ParticlesBg className="particles" num={150} color='#FFFFFF' type='cobweb' bg={true} />      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
      onInputChange={this.onInputChange}
      onButtonSubmit={this.onButtonSubmit} />
      {/* {<FacialRecognition /> } */}
    </div>
  );
  }
}

export default App;