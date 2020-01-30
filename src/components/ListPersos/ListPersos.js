import React from 'react';
import Perso from '../Perso/Perso';
//import InfoPerso from '../InfoPerso/InfoPerso';
import './ListPersos.css';
//import InfoPerso from '../InfoPerso/InfoPerso';

class ListPerso extends React.Component {
    constructor() {
        super();
        this.state = {
            nameClick: ''
        }
    }

    onClick(e){
        if (this.state.nameClick !== '') {
            const divInfo = document.getElementById(this.state.nameClick);
            divInfo.classList.remove('listInfosdisplay');
        } 

        console.log(e.target);
        const nameTarget = e.target.textContent;
        console.log(nameTarget);
        //const idTarget = e.target.id;
        const divClick = document.getElementById(nameTarget);
        console.log(divClick);
        divClick.classList.add('listInfosdisplay');
        this.setState({nameClick: nameTarget});
    
    }

    render () {
        //console.log(this.props.listePerso)
        return (
                <div className='listPersos'>
                    {this.props.listePerso && this.props.listePerso.map((perso, i) => {
                        return(
                            <div className='perso' id ={i} key={i} onClick={this.onClick.bind(this)}>
                                <Perso name={perso.name} />
                            </div> 
                        );
                    })}
                </div>
        );
    }
}

export default ListPerso;