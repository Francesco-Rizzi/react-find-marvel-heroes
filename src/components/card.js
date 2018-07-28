import React, {Component} from 'react';
import {connect} from "react-redux";

import {toggleBookmark} from "../actions/actions";

class Card extends Component {
	
	render(){
		const hero = this.props.hero;
		
		return (<div className='app-heroes-card' >
			<div className="app-heroes-card-image" style={{backgroundImage: `url('${hero.thumbnail.path}.${hero.thumbnail.extension}')`}}></div>
			<div className="app-heroes-card-text">
				<div className="app-heroes-card-title">{hero.name}</div>
				<div className="app-heroes-card-saved" onClick={this.props.toggleBookmark.bind(this, hero)}>
					<img alt='bookmark' src={"" + (hero.bookmark ? 'bookmarked' : 'bookmark') + ".svg"}></img>
				</div>
			</div>
		</div>);
	}
	
}

export default connect(null, {
	toggleBookmark
})(Card);