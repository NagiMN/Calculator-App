import React, {Component} from 'react';


// symbol variable will pass all the calculator symbol from App.js
// will create onClick handler.
// ${} write a javaScript within this tag.
class Button extends Component {

    render(){
        return (
            <div className={`column-${this.props.cols}`}>
                <button className="calc-button" onClick={() => this.props.action(this.props.symbol)}>{this.props.symbol}</button>
            </div>
        )
    }
}

export default Button;