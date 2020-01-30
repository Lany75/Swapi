import React from 'react';

import './Infos.css';
import InfoPerso from '../InfoPerso/InfoPerso';

class Infos extends React.Component {
    render () {
        //console.log(this.props.listePerso);
        return (
            <div className='infos'>
                <InfoPerso listePerso={this.props.listePerso}/>
            </div>
        );
    }
}

export default Infos;