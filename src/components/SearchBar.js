import React from 'react';


class SearchBar extends React.Component{
 state = {term: ''};
 
 onFormSubmit =  (event) => {
event.preventDefault();
 }

  render(){
    return(
      <div id="cover">
  <form method="get" onSubmit={this.onFormSubmit}>
    <div className="tb">
      <div className="td">
      <label>Image Search</label>
      <input type="text"   placeholder="Search"
      required
      value ={this.state.term} onChange={(e) => this.setState({term: e.target.value})}/>
    
     
      </div>
    </div>
  </form>
</div>
    )
  }
}

export default SearchBar;