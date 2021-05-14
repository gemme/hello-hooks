import React, {Component} from 'react';
import './style.css';
import './style2.css';

export class BadExample extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: this.props.data // hello world
    };
  }

  // se ejecuta despues de haber sido ejecutado el render
  componentDidUpdate(oldProps) {
    if(oldProps.data !== this.props.data) {
      this.setState({
        data: this.props.data
      });
    }
  }

  render() {
    console.log('BadExample::render');
    return (
      <div
        className={'input-css'}
       >
        {this.state.data}
      </div>
    );
  }

}