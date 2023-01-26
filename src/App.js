import './App.css';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router';
import BookList from "./components/BookList";
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
