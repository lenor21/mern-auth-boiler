import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './pages/rootlayout/RootLayout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Profile from './pages/profile/Profile';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
