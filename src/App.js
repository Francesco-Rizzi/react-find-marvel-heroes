import React, {Component} from 'react';
import {connect} from "react-redux";

import Header from './components/header';
import List from './components/list';
import {fetchHeroesByQuery, fetchHeroesByBookmark, toggleBookmark} from "./actions/actions";
import './styles/App.css';

class App extends Component {
	render(){
		return (<div className="App">
			<Header fetchHeroesByQuery={this.props.fetchHeroesByQuery} fetchHeroesByBookmark={this.props.fetchHeroesByBookmark} />
			<List onToggleBookmark={this.props.toggleBookmark} heroes={this.props.heroes} loading={this.props.loading} />
		</div>);
	}
}


export default connect(( {heroes, loading} ) =>{
	return {
		heroes,
		loading
	};
}, {fetchHeroesByQuery, fetchHeroesByBookmark, toggleBookmark})(App);


/*
* User - first view
* 	- show bookmarked
* 	- type on search
* 		- loading status
* 			- show fetched ones
* 	- empty the search
* 		- show bookmarked
*
* */
