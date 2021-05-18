import React from 'react';
import './styles.scss';




export class ImageChanger extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			imageIndex: 0,
			autoplay: false
		};

	}

	componentDidMount() {
		this.changeAutoplay(true);

	}

	componentWillUnmount() {
		this.changeAutoplay(false);
	}

	changeImage(step = 1) {
		this.setState((state, props) => {
			return {
				imageIndex: ((state.imageIndex + step) % this.props.images.length)
			}
		});
	}

	show(step) {
		this.changeAutoplay(false);
		this.changeImage(step);
	}

	changeAutoplay(activate = null) {
		activate = (activate === null) ? !this.state.autoplay : activate;
		
		clearInterval(this.intervalId);
		
		if(activate) {
			this.intervalId = setInterval(() => {
				this.changeImage(1);
			}, this.props.interval)
		}

		this.setState((state, props) => {
			return {
				autoplay: activate
			}
		});
	}

	render() {
		const currentImage = this.props.images[this.state.imageIndex];
		return (
			<div className="ImageChanger">
				<img src={currentImage.src} alt={currentImage.alt} />
				<button type="button" onClick={() => this.show(-1)}>prev</button>
				<button type="button" onClick={() => this.changeAutoplay()}>auto</button>
				<button type="button" onClick={() => this.show(1)}>next</button>
			</div>
		)
	}
}