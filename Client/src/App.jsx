
import {BrowserRouter, Routes, Route} from  'react-router-dom';
import Signin from './Pages/Signin';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Header from './Components/Header';
import PrivateRoute from './Components/privateroute';
import CreateListing from './Pages/CreateListing';
import UpdateListing from './Pages/UpdateListing';
import Listing from './Pages/Listing';
import Search  from './Pages/Search';

function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>S
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<Signin />} />
    <Route path="/sign-up" element={<Signup />} />
    <Route path="/about" element={<About />} />
    <Route path="/search" element={<Search />} />
    <Route path="/listing/:listingId" element={<Listing />} />
    <Route  element={<PrivateRoute/>}>
    <Route path="/profile" element={<Profile />} />
    <Route path="/create-listing" element={<CreateListing/>} />
    <Route path="/update-listing/:listingId" element={<UpdateListing/>} />
    </Route>
  </Routes>
  </BrowserRouter>
}

export default App