import Home from './Home/Home';
import './allCompCss/allCompCss.css'
import { Routes,Route } from 'react-router-dom';
import Login from './components/Form/Login/Login';
import Signup from './components/Form/Signup/Signup';
import Forgotpass from './components/Form/forgotPass/forgotpass';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/ForgotPass' element={<Forgotpass />}/>
      </Routes>
      <Home/>
    </div>
  );
}

export default App;
