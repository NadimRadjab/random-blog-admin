import "./App.css";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Post from "./components/Post";
import { Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { loadUser } from "./actions/authActions";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

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
          <Route render={() => <Home />} />
        </Switch>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
