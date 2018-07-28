import React, {Component} from 'react';

import Header from './components/header';
import List from './components/list';
import './styles/App.css';

class App extends Component {
	render(){
		return (<div className="App">
			<Header />
			<List />
		</div>);
	}
}

export default App;


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
