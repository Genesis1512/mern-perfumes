
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './JSX/home.jsx'; 
import Footer from './JSX/footer.jsx'; 
import Banner from './JSX/banner.jsx'; 
import PerfumeList from './JSX/perfumes-list.jsx'; // Import your new component
import PerfumeDetail from './JSX/perfume-detals.jsx'; // Import your detail page

function App() {
  return (
    <Router>
      {/* <Home />
      <Banner /> */}
      <Routes>
        <Route path="/" element={<><Home /><Banner /><PerfumeList /><Footer/></>} /> {/* Home page with Banner */}
        {/* <Route path="/" element={<PerfumeList />} /> Add a route for the main page */}
        <Route path="/perfumes" element={<PerfumeList />} /> {/* Route for perfume list */}
        <Route path="/perfume/:id" element={<PerfumeDetail />} /> {/* Route for perfume detail */}
      </Routes>
    </Router>
  );
}

export default App;
