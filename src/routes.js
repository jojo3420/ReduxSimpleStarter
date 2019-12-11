import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/app";
import IndexPosts from "./containers/index_posts";
import RegistrationPosts from "./containers/registration_posts";
import DetailPosts from "./containers/detail_posts";

const Test = () => <div>Test</div>;

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPosts} />
    <Route path="/posts/:id" component={DetailPosts} />
    <Route path="/new/posts" component={RegistrationPosts} />
    <Route path="/test" component={Test} />
  </Route>
);




