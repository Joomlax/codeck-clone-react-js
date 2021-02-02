import "./Assets/css/App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatDo from "./components/WhatDo";
import Work from "./components/Work";
import Ahtapot from "./Assets/img/ahtapot.svg";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhatDo />
      <Work
        title="Akıllı Ahtapot"
        category="Teşvik Hesaplama Web Yazılımı"
        description="SGK Cari Dönem ve Geçmiş Dönem Devlet Teşvikleri Hesaplama Yazılımı"
        website="https://akilliahtapot.com/"
        gallery="https://codeck.com.tr/projects.html#ahtapot-1"
        image={Ahtapot}
      />
    </div>
  );
}

export default App;
