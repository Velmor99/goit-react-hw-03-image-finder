import React, { Component } from 'react';
import styles from './styles.css';
// При нажатии на кнопку Load more должна
// догружаться следующая порция изображений и
// рендериться вместе с предыдущими.
// После загрузки и рендера новой партии
// изображений страница должна плавно скролиться.
// Для скрола используй следующий код.

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });

export default class Button extends Component {
	render() {
		const { loadMore } = this.props;
		return (
			<div className="button-container">
				<button className="Button" onClick={loadMore}>
					Load more
				</button>
			</div>
		);
	}
}
