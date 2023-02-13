import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import Navigation from './components/navigation/navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

// const particlesOptions = {
//   color= "#ff0000", 
//   num= {200},
//   type= "circle", 
//   bg= {true} 
// }

class App extends Component {
  render() {
    return (
    <div className="App">
        {/* <div>...</div> */}
        <ParticlesBg className="particles" num={150} color='#FFFFFF' type='cobweb' bg={true} />      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* {<FacialRecognition /> } */}
    </div>
  );
  }
}

export default App;
