import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Containers/Footer/Footer';
import Nav from './Containers/Nav/Nav';
import SignUp from './Signup/SignUp';

function App() {
  return (
    <div className="App">
      Mohaprabhu
      <Nav/>
      <Routes>

      <Route path='/' element={"Home Page"}/>                     
      <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
