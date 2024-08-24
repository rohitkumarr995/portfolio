
import { useEffect } from 'react';
import Footer from './components/footer.js';
import Navbar from './components/navbar.js';
import AppRoutes from './routes/index.routes.js';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {

  const location = useLocation();
  const navigate = useNavigate()
  useEffect(()=>{
    if(location.pathname == '/'){
      navigate('/home')
    }
  },[])

  return (
    <>
      <Navbar/>
      <AppRoutes/>
      <Footer/>
    </>
  );
}

export default App;
