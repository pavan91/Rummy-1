import React, { Component } from 'react';

import AddUser from '../../component/AddUser/AddUser';
import ScoreTable from '../../component/ScoreTable/ScoreTable';

class Rummy extends Component {
	state = { 
		numberOfPlayers: 0,
		players: []
	}

	handleSubmit = player => {
		const players = [...this.state.players];
		player = {
			...player,
			score: [0, 0, 0, 0, 0, 0]
		}
		players.push(player);
		const numberOfPlayers = players.length;
		this.setState({numberOfPlayers, players});
	}

	updateScoreHandler = (playerIndex, roundIndex, value) => {
		const players = [...this.state.players];
		const playerToUpdate = {
			...players[playerIndex],
			score: [...players[playerIndex].score]
		};
		playerToUpdate.score[roundIndex] = parseInt(value, 10);
		players[playerIndex] = playerToUpdate
		this.setState({players});
	}

	render() { 
		return (
			<div>
				<AddUser submit={this.handleSubmit}/>
				<ScoreTable players={this.state.players} updateScore={this.updateScoreHandler}/>
			</div>
		);
	}
}
 
export default Rummy;