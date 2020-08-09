import React, { Component } from 'react';
import Modal from './Modal'

export default class ImageGalleryItem extends Component {
    state = {
		showModal: false
	}


	showModal = () => {
		this.setState({
			showModal: !this.state.showModal
		})
	}

	render() {
		const {id, source, alt, large} = this.props
		return (
			<li key={id} onClick={this.showModal} className="ImageGalleryItem">
				{this.state.showModal ? <Modal onClose={this.showModal} largeSize={large} alt={alt}></Modal> : 
				<img src={source} alt={alt} data-action={large} className="ImageGalleryItem-image" />}
			</li>
		);
	}
	
}