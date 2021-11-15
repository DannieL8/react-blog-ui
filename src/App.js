import "./App.css";
import { Switch, Route } from "react-router-dom";
import AllPostsPage from "./components/Posts/AllPostsPage";
import Header from "./components/common/Header";
import HomePage from "./components/HomePage";
import SinglePostContainer from "./components/Posts/SinglePostContainer";
import AuthorsPage from "./components/authors/AuthorsPage";
import SingleAuthorPage from "./components/authors/SingleAuthorPage";
import ManagePosts from "./components/managePosts/ManagePosts";
import Authentication from "./components/auth/Authentication";
import { useSelector } from "react-redux";

function App() {
  const showHeader = useSelector((state) => state.ui.showHeader);

  return (
    <div className="App">
      {showHeader ? <Header /> : ""}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Authentication} />
        <Route exact path="/posts" component={AllPostsPage} />
        <Route exact path="/posts/:id" component={SinglePostContainer} />
        <Route exact path="/authors" component={AuthorsPage} />
        <Route exact path="/authors/:id" component={SingleAuthorPage} />
        <Route exact path="/manage-posts" component={ManagePosts} />
        <Route exact path="/manage-posts/:id" component={ManagePosts} />
      </Switch>
    </div>
  );
}

export default App;
