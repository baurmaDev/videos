import React from 'react'

class SearchBar extends React.Component{

    state = {term: ''}

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSearchSubmit(this.state.term);
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="ui fluid massive icon input">
                        <input type="text" placeholder="Find videos..." onChange={e => this.setState({term: e.target.value })}></input>
                        <i className="search icon" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;