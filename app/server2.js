import React from 'react';
import ReactDOM from 'react-dom';
import Marked from 'marked';

var abc = (
     'Heading======= \n Sub-heading----------- \n ### Another deeper headingParagraphs are separated by a blank line.Leave 2 spaces at the end of a line to do a line break Text attributes *italic*, **bold**,`monospace`, ~~strikethrough~~ .Shopping list:* apples* oranges  * pears Numbered list:  1. apples  2. oranges  3. pears The rain---not the reign---in Spain. *[Herman Fassett](https://freecodecamp.com/hermanfassett)* '
);


class InputBox extends React.Component {
    constructor(){
        super();
        this.state = {
            text : abc
        }
    }
    updateText(e){
        console.log(e)
        this.setState ({text:e.target.value})
    }
    
    render() {
       return (
            <div>
                <textarea rows='25' className="form-control" value={this.state.text} onChange= {this.updateText.bind(this)}/>
                </div>
        );

    }
}


const OutputView = (props) => <div> 'hello' </div>;
// <div>dangerouslySetInnerHTML ={ {__html: props.children}} </div>;



const App = (
    <div className="container" style={{ marginTop: 40 }} >
        <div className="row">
            <div className="col-sm-6">
                <InputBox/>
            </div>
            <div className="col-sm-6">
<OutputView>{abc}</OutputView>
            </div>
        </div>
    </div>
);

ReactDOM.render(
    App, document.getElementById('root')
);