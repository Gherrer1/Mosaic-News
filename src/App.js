import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import HeadlinesListContainer from './HeadlinesListContainer';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route component={SearchForm} />
					<Route
						path="/headlines/:page"
						component={HeadlinesListContainer}
					/>
				</div>
			</Router>
		);
	}
}

export default App;
