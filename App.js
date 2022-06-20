//for adding bootstrap using cmd like npm install bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/pages/layout/Navbar';
import NotFound from './components/pages/layout/NotFound';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AddUser from './components/pages/users/AddUser';
import EditUser from './components/pages/users/EditUser';
import ViewUser from './components/pages/users/ViewUser';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
     
     <Routes>
      <Route  path = "/" element={<Home/>}/>
      <Route  path = "/about" element={<About/>}/>
      <Route  path = "/contact" element={<Contact/>}/>
      <Route path = "/users/add" element={<AddUser/>}/>
      <Route path = "/users/edit/:id" element={<EditUser/>}/>
      <Route path = "/users/view/:id" element={<ViewUser/>}/>
      <Route   path ="*" element={<NotFound/>}/>

     
     </Routes>
      
      
    </div>
    </Router>
  );
}

export default App;
