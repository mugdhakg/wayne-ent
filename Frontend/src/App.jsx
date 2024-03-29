import mainLayout from "./layouts/admin/mainLayout";
import NewClub from "./Views/admin/NewClub";
import Login from "../src/Views/admin/Login";
import { Clubs } from "./Views/admin/Clubs";
import ClubsView from './Views/admin/ClubsView';
import Registration from "./Views/client/RegistrationForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" Component={Login} />
        <Route path="/register" Component={Registration}/>
      <Route path="/home" Component={mainLayout}>
        <Route index path="/home/new" Component={NewClub}/>
        <Route path="/home/clubs" Component={Clubs} />
        <Route path="/home/clubs/view" Component={ClubsView} />
      </Route>
    </Routes>
    </Router>
  )
}

export default App
