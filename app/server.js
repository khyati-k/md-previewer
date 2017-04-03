import React from 'react';
import ReactDOM from 'react-dom';
import Marked from 'marked';

var a = 'Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\n Paragraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a  line break\n\n Text attributes *italic*, **bold**,`monospace`, ~~strikethrough~~. \n\nShopping list:\n\n * apples\n * oranges\n * pears \n\nNumbered list:\n 1. apples \n 2. oranges\n 3. pears\n\nThe rain---not the reign---in Spain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)* ';


class Ip extends React.Component {
	constructor() {
		super();
		this.state = {
			text: a
		}
	}
	update(e) {
		this.setState({ text: e.target.value })
	}
	render() {
		let a = this.state.text;
		return (
			<div className="container" style={{ marginTop: 40}} >
				<div className="col-sm-6">
					<textarea className="form-control" value={this.state.text} rows="25"
						onChange={this.update.bind(this)} /></div>

				<div className="col-sm-6"
					dangerouslySetInnerHTML={{ __html: Marked(a) }} ></div> 

			 </div>
				);
	}
}

ReactDOM.render(
	<Ip />, document.getElementById('root')
);