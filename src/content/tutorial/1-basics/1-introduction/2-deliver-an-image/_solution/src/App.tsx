import './App.css'
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

function App() {

  // Create a Cloudinary instance and set your cloud name.  
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  const myImage = cld.image('docs/models'); 

  return (
    <>
      <h1>React Quick Start</h1>
      <div>
        <AdvancedImage cldImg={myImage} crossorigin="anonymous"/>
      </div>
    </>
  )
}

export default App
