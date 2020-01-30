import React, {Fragment} from 'react';

class Perso extends React.Component {
    render () {
        return (
            <Fragment>{this.props.name}</Fragment>
        );
    }
}

export default Perso;
