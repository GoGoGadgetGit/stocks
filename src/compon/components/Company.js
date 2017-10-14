import React, { Component } from 'react';

import { Sparklines, SparklinesLine } from 'react-sparklines';

class Company extends Component{

  render(){

    return(
      <div>
        <h3>{this.props.name}, {this.props.ticker}</h3>
        <Sparklines data = {this.props.prices} >
          <SparklinesLine color = "orange" />
        </Sparklines>
      </div>
    )
  }
}

export default Company;