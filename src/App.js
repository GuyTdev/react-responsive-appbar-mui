import { Route, Routes } from 'react-router';
import './App.css';
import Movies from './components/movies/Movies';
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Users from './components/users/Users';
import Home from './components/Home';
import Members from './components/members/Members';
import AddUser from './components/users/AddUser';
import AllUsers from './components/users/AllUsers';
import EditUser from './components/users/EditUser';
import AddMovie from './components/movies/AddMovie';
import AllMovies from './components/movies/AllMovies';
import EditMovie from './components/movies/EditMovie';
import AddMember from './components/members/AddMember';
import AllMembers from './components/members/AllMembers';
import EditMember from './components/members/EditMember';
// import MembersWhoWatchedAMovie from './components/helpers/MembersWhoWatchedAMovie';
const App = () => {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='users' element={<Users/>}>
            <Route path='adduser' element={<AddUser/>}/>
            <Route path='allusers' element={<AllUsers/>}/>
            <Route path=':id' element={<EditUser/>}/>
          </Route>
          <Route path='movies' element={<Movies/>}>
            <Route path='addmovie' element={<AddMovie/>}/>
            <Route path='allmovies' element={<AllMovies/>}/>
            <Route path=':id' element={<EditMovie/>}/>
          </Route>
            <Route path='members' element={<Members/>}>
            <Route path='addmember' element={<AddMember/>}/>
            <Route path='allmembers' element={<AllMembers/>}/>
            <Route path=':id' element={<EditMember/>}/>
          </Route>
      </Routes>
      {/* <MembersWhoWatchedAMovie/> */}
    </div>
  );
}

export default App;
