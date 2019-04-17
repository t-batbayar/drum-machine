import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './styles/styles.scss';

class DrumMachine extends React.Component {
	state = {
		kit: heatherKit
	}

	render() {
		console.log(this.state.kit);
		return (
			<div id="drum-machine">
				<div id="display">

				</div>
			</div>
		)
	}
}

const Wrapper = () => (
	<div>
		<DrumMachine />
	</div>
)

const heatherKit = [
	{
		audio: 'Heater-1',
		key: 'Q',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
	},
	{
		audio: 'Heater-2',
		key: 'W',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
	},
	{
		audio: 'Heater-3',
		key: 'E',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
	},
	{
		audio: 'Heater-4',
		key: 'A',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
	},
	{
		audio: 'Clap',
		key: 'S',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
	},
	{
		audio: 'Open-HH',
		key: 'D',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3 71'
	},
	{
		audio: 'Kick-n`-Hat',
		key: 'Z',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
	},
	{
		audio: 'Kick',
		key: 'X',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
	},
	{
		audio: 'Closed-HH',
		key: 'C',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
	},
]

const smoothPianoKit = [
	{
		audio: 'Chord-1',
		key: 'Q',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
	},
	{
		audio: 'Chord-2',
		key: 'W',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
	},
	{
		audio: 'Chord-3',
		key: 'E',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
	},
	{
		audio: 'Shaker',
		key: 'A',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
	},
	{
		audio: 'Open-HH',
		key: 'S',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
	},
	{
		audio: 'Closed-HH',
		key: 'D',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
	},
	{
		audio: 'Punchy-Kick',
		key: 'Z',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
	},
	{
		audio: 'Side-Stick',
		key: 'X',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
	},
	{
		audio: 'Snare',
		key: 'C',
		audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
	},
]

ReactDOM.render(<Wrapper />, document.getElementById('app'));