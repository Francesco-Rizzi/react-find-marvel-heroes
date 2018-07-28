import React, {Component} from 'react';

export default class Card extends Component {
	
	render(){
		const hero = this.props.hero;
		
		return (<div className='app-heroes-card' >
			<div className="app-heroes-card-image" style={{backgroundImage: `url('${hero.thumbnail.path.replace('http','https')}.${hero.thumbnail.extension}')`}}></div>
			<div className="app-heroes-card-text">
				<div className="app-heroes-card-title">{hero.name}</div>
				<div className="app-heroes-card-saved" onClick={this.props.onToggleBookmark.bind(this, hero)}>
					<img alt='bookmark' src={"./" + (hero.bookmark ? 'bookmarked' : 'bookmark') + ".svg"}></img>
				</div>
			</div>
		</div>);
	}
	
}