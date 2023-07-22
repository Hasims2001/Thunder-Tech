import logo from './logo.svg';
// import './App.css';

// import { Temp } from './hasim/Temp';
// import AllRouters from './AllRouters';
// import { SignInPage } from './hasim/SignInPage';
// import { AdminHeader } from './hasim/AdminHeader';
// import { AdminPage } from './hasim/AdminPage';
 import { ProductList } from './Ranvijay/ProductList';

import { Temp } from './hasim/Temp';
import AllRouters from './AllRouters';
import { SignInPage } from './hasim/SignInPage';
import { AdminHeader } from './hasim/AdminHeader';
import { AdminPage } from './hasim/AdminPage';

// import { ProductList } from './Ranvijay/ProductList';
import { Footer } from './Parmeshwar/Components/Footer';
import { Navbar } from './Parmeshwar/Pages/Navbar';
//Parmeshwar
import { useContext } from 'react';
import { AppContent } from './Parmeshwar/Contex/ContextApi';
import styled from "styled-components"
import { AllRoutes } from './Parmeshwar/Pages/AllRoutes';

import { AboutModal } from './Parmeshwar/Components/AboutModal';

import { AdminRouter } from './hasim/Component/AdminRouter';




function App() {

  const { theme } = useContext(AppContent)

  return (
    // <DIV className="App" theme={theme}>
    //   <div className='nav'>
    //     <Navbar />
    //   </div>

    
    

    // <div className='allRoutes'>


    //     <AllRoutes />
    //   </div>


    //   <Footer />
    // </DIV>
    <div className="App">
      <AllRouters/>
   {/* <ProductList/> */}
      






    </div>


  );
}

export default App;

const DIV = styled.div`

background-color: ${props => (props.theme === "lightTheme" ? "#e8e8e8" : "#212121")};

.nav{
  /* margin-bottom: 800px; */
  /* border: 2px solid red; */
  overflow: hidden;
  /* background-color: #333; */
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${props => (props.theme === "lightTheme" ? "#e8e8e8" : "#212121")};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding-bottom: 5px;
}



.allRoutes{
  padding: 16px;
  /* margin-top: 30px; */
  /* height: 3500px;  */
}

`
