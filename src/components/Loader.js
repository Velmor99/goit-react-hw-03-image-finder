import Loader from 'react-loader-spinner';
import React from 'react';
import styles from './styles.css';
export default class Spinner extends React.Component {
	//other logic
	render() {
		return (
			<div className="loader">
				<Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
			</div>
		);
	}
}
