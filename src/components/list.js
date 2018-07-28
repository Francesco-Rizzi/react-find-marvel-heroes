import React, {Component} from 'react';
import {connect} from 'react-redux';

import Card from './card';

class List extends Component {
	
	render(){
		
		const items = Object.values(this.props.heroes);
		
		if ( this.props.loading ) {
			return <div className='app-loader'>
				<img alt='spinner' src='/spinner.svg'/>
				<div>loading results...</div>
			</div>;
		}
		
		if ( !items.length ) {
			return <div className='app-empty'>
				<div>Any Hero available, try searching for a new one! 😉</div>
				<div><b>Hint</b>: try with "Spider".</div>
			</div>;
		}
		
		return (<div className='app-heroes-list'>
			{items.map(item => <Card hero={item} key={item.id}/>)}
		</div>);
		
	}
	
}


export default connect(( {heroes, loading} ) =>{
	return {
		heroes,
		loading
	};
})(List);
