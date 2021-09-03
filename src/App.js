import "./App.css";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Post from "./components/Post";
import { Route, Switch, useHistory } from "react-router-dom";
import store from "./store";
import { connect, Provider } from "react-redux";
import { loadUser } from "./actions/authActions";

function App() {
  let history = useHistory();
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  const isAuthenticated = store.getState().auth.isAuthenticated;

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Switch>
          {isAuthenticated === null ? history.push("/") : history.push("/home")}

          <Route exact path="/home" render={() => <Home />} />
          <Route
            exact
            path="/post/:id"
            render={(...routeProps) => <Post routeProps={routeProps} />}
          />
          <Route exact path="/" render={() => <LoginForm />} />
          <Route render={() => <Home />} />
        </Switch>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
