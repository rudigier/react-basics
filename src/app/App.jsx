import React from 'react';
import { ImageChanger } from './components/cms/ImageChanger';
import { Article } from './components/cms/Article';

import './styles.scss';

const images1 = [
	{
		src: 'https://picsum.photos/id/1/500/300',
		alt: ''
	},
	{
		src: 'https://picsum.photos/id/2/500/300',
		alt: ''
	},
	{
		src: 'https://picsum.photos/id/3/500/300',
		alt: ''
	}
];

const images2 = [
	{
		src: 'https://picsum.photos/id/4/500/300',
		alt: ''
	},
	{
		src: 'https://picsum.photos/id/5/500/300',
		alt: ''
	},
	{
		src: 'https://picsum.photos/id/6/500/300',
		alt: ''
	}
];


export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {showImageChanger: true};
	}

	render() {
		return (
			<div className="App">
				<ImageChanger 
					images={images1} 
					interval={750} 
				/>

				<Article
					headline="Hello World!"
					text="Excepteur magna dolor aute ea laborum qui voluptate consectetur dolore exercitation velit reprehenderit nostrud."
				/>

				<ImageChanger
					images={images2}
					interval={350}
				/>

				<Article
					headline="Occaecat esse nulla aliquip."
					text="Excepteur veniam est exercitation amet occaecat consequat amet in non cillum nulla sit ut esse quis velit ad fugiat adipisicing minim aliquip laboris ut ut nulla dolor nulla est nulla sed velit adipisicing ut consectetur."
				/>
			</div>
		);
	}
}