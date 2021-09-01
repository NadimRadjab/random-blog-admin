import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Post from "./components/Post";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/post/:id" render={() => <Post />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
