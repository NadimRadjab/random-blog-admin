import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Post from "./components/Post";
import { Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <LoginForm />} />
          <Route exact path="/home" render={() => <Home />} />
          <Route
            exact
            path="/post/:id"
            render={(...routeProps) => <Post routeProps={routeProps} />}
          />
        </Switch>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
