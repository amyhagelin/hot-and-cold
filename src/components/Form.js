import React from 'react';

export default class MainForm extends React.Component {

	handleSubmit = e => {
		e.preventDefault();
		const value = parseInt(this.numberInput.value, 10);
		this.props.onValueSubmitted(value);
		this.numberInput.value = "";
	}

	render() {
		const { guessesArray } = this.props;

		const guessesNo = guessesArray 
		  ? guessesArray.length
		  : 0;

		return (
			<div>	
				<form onSubmit={ this.handleSubmit }>
			    	<input 
			    		ref={ (input) => { this.numberInput = input; } }
			    		type="number" 
			    		name="guess" 
		    		/>
			    	<button>Guess</button>
			    </form>
			    <div>
			    	<h3>{ 'Guess # ' + guessesNo }</h3>
			    </div>
		    </div>
		);	
	}	
}

