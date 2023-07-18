import logo from './logo.svg';
// import './App.css';
import { Temp } from './hasim/Temp';
import AllRouters from './AllRouters';
import { SignInPage } from './hasim/SignInPage';
import { AdminHeader } from './hasim/AdminHeader';
import { AdminPage } from './hasim/AdminPage';
function App() {
  return (
    <div className="App">
      {/* <Temp />
      <AdminPage /> */}
      <SignInPage />
      {/* <AllRouters /> */}
    </div>
  );
}

export default App;
