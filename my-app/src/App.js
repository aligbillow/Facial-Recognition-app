import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';
import FacialRecognition from './components/FacialRecognition/FacialRecognition';
import Navigation from './components/navigation/navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
 apiKey: 'ac2424d97e6c4e30be8ef8c61ace084c'
});


class App extends Component {
  constructor() { 
    super();
    this.state = {
      input: '',
    }
  } 
  
  onInputChange = (event) => {
    console.log(event.target.value);
  } 

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict('53e1df302c079b3db8a0a36033ed2d15',
     "https://samples.clarifai.com/face-det.jpg")
     .then(
      function(response) {
         console.log(response);
      },
      function(err) {
        console.log(err)
      }
    );
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
      <FacialRecognition /> 
    </div>
  );
  }
}

export default App;