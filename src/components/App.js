import React from 'react'
import YouTube from '../api/YouTube';
import SearchBar from './SearchBar';

class App extends React.Component{

    OnTermSubmit = term => {
        YouTube.get('/search', {
            params: {
                q: term
            }
        });
    };

    render() {
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar OnSearchSubmit={this.OnTermSubmit} />
            </div>
        );
    }
}

export default App;