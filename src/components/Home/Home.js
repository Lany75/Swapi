import React from 'react';

import ListPerso from '../ListPersos/ListPersos';
import Infos from '../Infos/Infos';
import Search from '../Search/Search';

import './Home.css';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            listePersonnages: []
        }
    }

    componentDidMount() {
        this.getListPerso();
    }

    getListPerso() {
        fetch ('https://swapi.co/api/people/')
        .then (reponse => {
            return reponse.json();
        })
        .then (data => {
            //console.log(data.results);
            this.setState({
                listePersonnages: data.results
            });
            //console.log(this.state.listePersonnages);
        })
    }

    render () {
        return (
            <div className='home'>
                <Search />
                <div className='persosInfos'>
                    <ListPerso listePerso={this.state.listePersonnages} />
                    <Infos listePerso={this.state.listePersonnages}/>
                </div>
            </div>
        );
    }
}

export default Home;