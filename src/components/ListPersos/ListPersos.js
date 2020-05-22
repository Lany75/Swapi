import React from "react";
import "./ListPersos.css";

class ListPersos extends React.Component {
  constructor() {
    super();
    this.state = {
      nameClick: "",
    };
  }

  onClick(e) {
    if (this.state.nameClick !== "") {
      const divInfo = document.getElementById(this.state.nameClick);
      divInfo.classList.remove("listInfosdisplay");
    }

    const nameTarget = e.target.textContent;
    const divClick = document.getElementById(nameTarget);
    divClick.classList.add("listInfosdisplay");
    this.setState({ nameClick: nameTarget });
  }

  render() {
    return (
      <div className="listPersos">
        {this.props.listePerso &&
          this.props.listePerso.map((perso, i) => {
            return (
              <div
                className="perso"
                id={i}
                key={i}
                onClick={this.onClick.bind(this)}
              >
                {perso.name}
              </div>
            );
          })}
      </div>
    );
  }
}

export default ListPersos;
