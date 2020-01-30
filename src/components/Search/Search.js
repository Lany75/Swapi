import React from 'react';

import './Search.css';

class Search extends React.Component {
    render () {
        return (
            <div className='search'>
                <input placeholder='Nom du personnage'></input>
            </div>
        );
    }
}

export default Search;