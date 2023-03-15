import Home from './components/Home/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
