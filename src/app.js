import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './styles/styles.scss';

class DrumPad extends React.Component {
	constructor(props) {
		super(props);
		this.audioNode = React.createRef();
	}

	componentDidMount() {
		this.audioNode.current.volume = this.props.volume;
	}

	componentDidUpdate() {
		this.audioNode.current.volume = this.props.volume;
	}

	shouldComponentUpdate(nextProps) {
		if (this.props.audio === nextProps.audio &&
			this.props.audioLink === nextProps.audioLink &&
			this.props.volume === nextProps.volume) {
				return false;
			} else {
				return true;
			}
	}

	render() {
		return (
			<div className="drum-pad"
				id={ this.props.audio }
				onClick={ () => this.props.handlePlayAudio(this.props.button, this.props.audio) }
			>
				<audio 
					ref={ this.audioNode }
					src={ this.props.audioLink } 
					className="clip" 
					id={ this.props.button }
				></audio>
				{ this.props.button }
			</div>
		)
	}
}

const Controller = (props) => (
	<div className="controller">
		<div id="display">
			{ props.displayText }
		</div>
		<div className="volume-slider">
			<div className="volume">Volume: { Math.floor(props.volume * 100) }</div>
			<input 
				type="range" 
				min="1" 
				max="100" 
				value={ props.volume * 100 } 
				onChange={ e => props.handleVolumeChange(e) } 
			/>
		</div>
		<div className="audio-kit-selector">
			<select 
				className="kit-selector"
				value={ props.selectedKitName } 
				onChange={ (e) => props.handleChangeKit(e) } >
				{ Object.keys(props.kits)
					.map(kit => (
						<option key={ kit } value={ kit }>
							{ kit.split(/(?=[A-Z])/).join(' ') }
						</option>
					))
				}
			</select>
		</div>
	</div>
)

class DrumMachine extends React.Component {
	state = {
		kits: kits,
		selectedKit: [],
		selectedKitName: '',
		displayText: '',
		volume: 1,
		keyEventId: '',
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown);
		const firstKit = Object.keys(this.state.kits)[0];
		this.setState(() => ({
			selectedKit: this.state.kits[firstKit],
			selectedKitName: firstKit
		}));
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown);
	}

	handlePlayAudio = (id, audio) => {
		document.getElementById(id).play();
		const displayText = audio.split('-').join(' ');
		this.setState(() => ({ displayText }));
	}

	handleVolumeChange = (e) => {
		const volume = Number.parseFloat(e.target.value / 100).toFixed(2);
		this.setState((e) => ({ volume }));
	}

	handleChangeKit = (e) => {
		const selectedKitName = e.target.value;
		const changedForDisplay = selectedKitName.split(/(?=[A-Z])/).join(' ');
		this.setState(() => ({ 
			selectedKit: this.state.kits[selectedKitName],
			selectedKitName,
			displayText: changedForDisplay
		}))
	}

	handleKeyDown = (e) => {
		const pressedKey = e.key.toUpperCase();
		const index = this.state.selectedKit.findIndex(kit => kit.button === pressedKey);
		if (index !== -1) {
			const { button, audio } = this.state.selectedKit[index];
			this.handlePlayAudio(button, audio);
		}
	}

	render() {
		return (
			<div id="wrapper">
				<div id="drum-machine">
					<div className="pads">
						{this.state.selectedKit.map(pad => (
							<DrumPad key={ pad.audio } {...pad} handlePlayAudio={ this.handlePlayAudio } volume={ this.state.volume } />
						))}
					</div>
					<Controller 
						displayText={ this.state.displayText } 
						volume={ this.state.volume } 
						handleVolumeChange={ this.handleVolumeChange } 
						kits={ this.state.kits } 
						selectedKitName={ this.state.selectedKitName }
						handleChangeKit={ this.handleChangeKit }
					/>
				</div>
			</div>
		)
	}
}

const kits = {
	HeatherKit: [
		{
			audio: 'Heater-1',
			button: 'Q',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
		},
		{
			audio: 'Heater-2',
			button: 'W',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
		},
		{
			audio: 'Heater-3',
			button: 'E',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
		},
		{
			audio: 'Heater-4',
			button: 'A',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
		},
		{
			audio: 'Clap',
			button: 'S',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
		},
		{
			audio: 'Open-HH',
			button: 'D',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
		},
		{
			audio: 'Kick-n`-Hat',
			button: 'Z',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
		},
		{
			audio: 'Kick',
			button: 'X',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
		},
		{
			audio: 'Closed-HH',
			button: 'C',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
		},
	],
	SmoothPianoKit: [
		{
			audio: 'Chord-1',
			button: 'Q',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
		},
		{
			audio: 'Chord-2',
			button: 'W',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
		},
		{
			audio: 'Chord-3',
			button: 'E',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
		},
		{
			audio: 'Shaker',
			button: 'A',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
		},
		{
			audio: 'Open-HH',
			button: 'S',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
		},
		{
			audio: 'Closed-HH',
			button: 'D',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
		},
		{
			audio: 'Punchy-Kick',
			button: 'Z',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
		},
		{
			audio: 'Side-Stick',
			button: 'X',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
		},
		{
			audio: 'Snare',
			button: 'C',
			audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
		},
	]
}

ReactDOM.render(<DrumMachine />, document.getElementById('app'));