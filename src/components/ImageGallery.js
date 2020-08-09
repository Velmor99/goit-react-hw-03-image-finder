import React from 'react';
import ImageGalleryItem from './ImageGalleryItem'
import styles from './styles.css'

export default function ImageGallery({images}) {
	return <ul className="ImageGallery">
        {images.map(image => (
                <ImageGalleryItem
                key={image.id}
                source={image.webformatURL}
                alt={image.tags}
                large={image.largeImageURL}
                />
        ))}
        </ul>;
}
