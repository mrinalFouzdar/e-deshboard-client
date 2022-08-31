import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Containers/Footer/Footer';
import Login from './Containers/Login/Login';
import Nav from './Containers/Nav/Nav';
import PrivateComponent from './Containers/PrivateComponent/PrivateComponent';
import SignUp from './Containers/Signup/SignUp';
import AddProduct from './pages/AddProduct/AddProduct';

function App() {
  return (
    <div className="App">
      Mohaprabhu
      <Nav/>
      <Routes>
      <Route element={<PrivateComponent/>}>
      <Route path='/' element={"Home Page"}/>
      <Route path="/addProduct" element={<AddProduct/>}/>
      </Route>  
                         
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/logIn' element={<Login/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
