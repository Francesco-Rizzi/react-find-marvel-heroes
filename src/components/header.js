import React, {Component} from 'react';
import {connect} from "react-redux";

import {fetchHeroesByQuery, fetchHeroesByBookmark} from "../actions/actions";

class Header extends Component {
	
	constructor( props ){
		super(props);
		this.state = {
			query : '',
			timer : null
		};
	}
	
	
	render(){
		return (<div className='app-header'>
			<h1>React Find Marvel Heroes ⚛💥👊</h1>
			<h2>Search, view and bookmark your favorite <a href='https://www.marvel.com/' target='_blank'>Marvel</a> Heroes.</h2>
			<input type='text' placeholder='Type your favorite Hero...' value={this.state.query} onChange={this.handleChange.bind(this)} />
		</div>);
	}
	
	handleChange(e){
		
		const query = e.target.value;
		this.setState({query : query});
		
		clearTimeout(this.state.timer);
		if(query){
			this.setState({timer : setTimeout(this.props.fetchHeroesByQuery.bind(this, query), 500)});
		} else {
			this.props.fetchHeroesByBookmark();
		}
		
	}
	
	componentWillMount(){
		this.props.fetchHeroesByBookmark();
	}
	
}


export default connect(null, {
	fetchHeroesByQuery,
	fetchHeroesByBookmark
})(Header);