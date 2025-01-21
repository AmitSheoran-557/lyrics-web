import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero />} />
      {/* <Route path="/:tab" element={<Hero />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
