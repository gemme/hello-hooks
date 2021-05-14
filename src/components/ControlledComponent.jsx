import React, {Component} from 'react';
import './style.css';
import './style2.css';

export class ControlledComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: 'hello world!',
      mood: 'Grumpy'
    };
  }

  render() {
    // uncontrolled / controlled
    return (
      <div
        id="input_id"
        className={'input-css input-css2'}
       >
        <input
          type="text"
          value={this.state.value}
          onChange={(event) => {
            console.log('input1', event.target.value);
            this.setState({
              value: event.target.value
            })
          }}
          />
          <input
          type="text"
          value={this.state.mood}
          onChange={(event) => {
            console.log('input2', event.target.value);
            this.setState({
              mood: event.target.value
            })
          }}
          />
      </div>
    );
  }

}