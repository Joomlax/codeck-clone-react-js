import "./Assets/css/App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatDo from "./components/WhatDo";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhatDo />
    </div>
  );
}

export default App;
