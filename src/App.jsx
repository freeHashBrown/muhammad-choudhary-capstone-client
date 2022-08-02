import './App.scss';
import Header from './component/Header/Header';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {
  return (
   <div>
    <Header/>
    {/* <LoginPage/> */}
    <SignupPage/>
   </div>
  );
}

export default App;
