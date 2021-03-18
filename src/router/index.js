import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AsyncComponent from '../component/helper/AsyncComponent';

const Main = AsyncComponent(() => import('../view/main.js'));
const NotFound = AsyncComponent(() => import('../component/404.js'));

export default () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Main} />
			<Route path="/notFound" component={NotFound} />
			<Redirect to="/notFound" />
		</Switch>
	</BrowserRouter>
);
