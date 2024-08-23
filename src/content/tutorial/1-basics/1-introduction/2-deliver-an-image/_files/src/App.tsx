import './App.css'
import { Cloudinary } from "@cloudinary/url-gen";

function App() {

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
