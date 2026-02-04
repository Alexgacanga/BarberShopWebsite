import { Homepage } from "./components/Homepage";
import { useEffect } from 'react';
import bg1 from "./assets/bg1.png"

function App() {
    useEffect(() => {
    const images = [bg1];
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
