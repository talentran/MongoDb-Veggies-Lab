import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowVeggies from './components/ShowVeggies';
import CreateVeggie from './components/CreateVeggie';
import ShowSingleVeggie from './components/ShowSingleVeggie';

function test () {
  return (
    <h1>Home</h1>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={test} />
        <Route path="/veggies" Component={ShowVeggies} />
        <Route path="/create_veggie" Component={CreateVeggie} />
        <Route path="/veggie/:veggieName" Component={ShowSingleVeggie} />
      </Routes>
    </Router>
  );
}

export default App;
