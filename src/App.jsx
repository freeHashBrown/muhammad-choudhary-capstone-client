import './App.scss';
import Header from './component/Header/Header';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
   <div>
    <Header/>
    {/* <LoginPage/> */}
    <SignupPage/>
    {/* <HomePage/> */}
   </div>
  );
}

export default App;
