import React from 'react';
import { Headline } from './../../base/Headline';
import { Paragraph } from './../../base/Paragraph';
import './styles.scss';

export class Article extends React.Component {
	render() {
		return (<div className="Article">
			<Headline text={this.props.headline} />
			<Paragraph text={this.props.text} />
		</div>)
	}
}