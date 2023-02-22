import { Route, Routes } from 'react-router';
import './App.css';
import Movies from './components/Movies';
import Subscriptions from './components/Subscriptions';
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Users from './components/Users';
const App = () => {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
          <Route path='/users' element={<Users/>}></Route>
          <Route path='/movies' element={<Movies/>}></Route>
          <Route path='/subscriptions' element={<Subscriptions/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
