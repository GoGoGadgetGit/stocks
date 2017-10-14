import React, {Component} from 'react';
import {displayCompanies, trackCompany} from '../../actions'
import { connect } from 'react-redux';

class SearchBar extends Component {

  handleSearch(event){
    if(event.target.value !== '') {
      this.props.searchCompanies(event.target.value)
    }
  }

  render(){
    const searchResults = this.props.display.map(company => <li key={company.ticker} onClick={() => this.props.trackCompany(company.ticker)}> <p> {company.name}, {company.ticker} </p> </li>)
    return(
      <section>
        <div>
            <input type='text' placeholder='Track it' onChange={ event => this.handleSearch(event)}/>
        </div>
        <div>
            <ul>
              {searchResults}
            </ul>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state){
  return{
    display: state.display
  }
}

function mapDispatchToProps(dispatch){
  return{
    searchCompanies: function(text){
      fetch("https://young-plains-68972.herokuapp.com/api/autocomplete?q=" + text)
      .then(resp => resp.json())
      .then( resp => dispatch(displayCompanies(resp))
      )
    },
    trackCompany: function(ticker){
      fetch("https://young-plains-68972.herokuapp.com/api/companies/" + ticker)
      .then(resp => resp.json())
      .then( resp => dispatch(trackCompany(resp)))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);