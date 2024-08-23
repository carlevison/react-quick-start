import './App.css'
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";

function App() {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  const myImage = cld.image('docs/models'); 

  myImage.resize(fill().width(250).height(250));

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
