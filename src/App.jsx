import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Header from './component/Header/Header';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

import DeletePost from './component/DeletePost/DeletePost';
import EditPost from './component/EditPost/EditPost';

function App() {

  return (
   <div>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact component={LoginPage}/>
          <Route path="/signup" component={SignupPage}/>
          <Route path="/homepage" component={HomePage}/>
          <Route path="/profile" component={ProfilePage}/>
          <Route path="/posts/:id" component={DeletePost}/>
          <Route path="/edit/:id" component={EditPost}/>

        </Switch>
      </BrowserRouter>
   </div>
  );
}

export default App;
