import React from 'react';
import './ScoreTable.css';

const ScoreTable = (props) => {
	const players = props.players.map((player, index) => {
		const score = player.score.reduce((accu, next) => {
			return accu += next;
		}, 0)
		return (
			<div key={index}>
				<p>{player.name}</p>
				<ol>
						{player.score.map((score, index2) => (
							<li key={index2+100}>
								<input 
								type='number' 
								value={score} 
								onChange={(event) => props.updateScore(index, index2, event.target.value)} />
							</li>
						))}
				</ol>
				<p>Score: {score}</p>
			</div>
		)
	})
	
	return (
		<div className='score-table'>
			<div>
				<p>Rummy</p>
				<ol>
					<li>Run/Run</li>
					<li>Run/Book</li>
					<li>Book/Book</li>
					<li>Run/Run/Book</li>
					<li>Run/Book/Book</li>
					<li>Book/Book/Book</li>
				</ol>
			</div>
			{players}
		</div>
	);
}
 
export default ScoreTable;