import { Info } from "../Components/Info/Info";
import { Nav } from "../Components/Nav/Nav";
import { Rooms } from "../Components/Rooms/Rooms";
import { Features } from "../Components/Features/Features";

import "@coreui/coreui/dist/css/coreui.min.css";
import "../index.css";
import { Footer } from "../Components/Footer/Footer";

export const App = () => {
  return (
    <div className="box">
      <Nav />
      <Info />
      <Rooms />
      <Features />
      <Footer />
    </div>
  );
};


