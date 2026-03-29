
import { Info } from "./Components/Info/Info";
import Nav from "./Components/Nav/Nav";
import { Rooms } from "./Components/Rooms/Rooms";

import '@coreui/coreui/dist/css/coreui.min.css'
import './index.css'

const App = () =>{
  return (
    <div className='box'>
      <Nav  />
      <Info />
      <Rooms />
    </div>
  );
}

export default App