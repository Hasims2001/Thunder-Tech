import logo from './logo.svg';
import './App.css';
import { Temp } from './components/Temp';
import AllRouters from './AllRouters';
import { SignInPage } from './components/SignInPage';
function App() {
  return (
    <div className="App">
      <SignInPage />
      {/* <AllRouters /> */}
    </div>
  );
}

export default App;
