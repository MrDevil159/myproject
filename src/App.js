import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Detail from './Detail';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
