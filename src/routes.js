import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsList from './containers/posts_list';
import RegisterPosts from './containers/register_posts';
import DetailPosts from './containers/detail_posts';


const SampleRoute = () => <div>SampleRoute</div>;


/* 라우터 구성
중첩된 라우트 도 구성이 가능
라우트 간에 중첩이 되면 컴포넌트 간에 관계가 형성 된다. (상위컴, 하위컴)
상위컴 에서 하위 컴포넌트를 포함 해야한다. => 상위컴포넌트에서 {this.props.children}
* */

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsList} />
    <Route path="sample" component={SampleRoute} />
    <Route path="/posts/new" component={RegisterPosts} />
    <Route path="/posts/:id" component={DetailPosts} />
  </Route>

);

