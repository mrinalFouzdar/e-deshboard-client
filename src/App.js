import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Containers/Footer/Footer';
import Nav from './Containers/Nav/Nav';
import PrivateComponent from './Containers/PrivateComponent/PrivateComponent';
import SignUp from './Containers/Signup/SignUp';

function App() {
  return (
    <div className="App">
      Mohaprabhu
      <Nav/>
      <Routes>
      <Route element={<PrivateComponent/>}>
      <Route path='/' element={"Home Page"}/>
      </Route>  
                         
      <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
