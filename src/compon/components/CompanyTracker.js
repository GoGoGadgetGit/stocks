import React, { Component } from 'react';

import Company from './Company';
import { connect } from 'react-redux';

import {trackCompany} from '../../actions';

class CompanyTracker extends Component{

  render(){

    const tracking = this.props.tracked.map( selected => <Company key={selected.ticker} name={selected.name} ticker={selected.ticker}
        prices={selected.prices}/> )

    return(
      <section>
          {tracking}
      </section>
    )
  }
}
function mapState2Props(state){
  return{
    tracked: state.tracked,
  }
}

function mapDispatch2Props(dispatch){
  return{

    trackCompany: companyName => dispatch(trackCompany(companyName)),
  }
}



export default connect(mapState2Props, mapDispatch2Props)(CompanyTracker);