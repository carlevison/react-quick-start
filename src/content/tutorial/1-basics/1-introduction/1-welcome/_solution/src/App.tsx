import './App.css'
import { Cloudinary } from "@cloudinary/url-gen";

function App() {

    // Create a Cloudinary instance and set your cloud name.  
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  return (
    <>
      <h1>React Quick Start</h1>

    </>
  )
}

export default App
