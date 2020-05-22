import React from "react";

import "./InfoPerso.css";

class InfoPerso extends React.Component {
  render() {
    return (
      <div className="infos">
        <div className="infoPerso">
          {this.props.listePerso &&
            this.props.listePerso.map((perso, i) => {
              return (
                <ul key={i} className="listInfos" id={perso.name}>
                  <li>nom : {perso.name}</li>
                  <li>yeux : {perso.eye_color}</li>
                  <li>année de naissance : {perso.birth_year}</li>
                  <li>genre : {perso.gender}</li>
                  <li>date de création : {perso.created.slice(0, 10)}</li>
                  <li>date d'édition : {perso.edited.slice(0, 10)}</li>
                </ul>
              );
            })}
        </div>
      </div>
    );
  }
}

export default InfoPerso;
