import React, {Component} from 'react';
import './style.css';
import './style2.css';

export class GoodExample extends Component {

  render() {
    console.log('GoodExample::render');
    return (
      <div
        className={'input-css'}
       >
        {this.props.data}
      </div>
    );
  }

}