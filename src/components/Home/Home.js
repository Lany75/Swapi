import React from "react";
import Axios from "axios";

import ListPersos from "../ListPersos/ListPersos";
import InfoPerso from "../InfoPerso/InfoPerso";
//import Search from "../Search/Search";
import "./Home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      listePersonnages: [],
    };
  }

  componentDidMount() {
    this.getListPerso();
  }

  getListPerso() {
    /*     fetch("https://swapi.dev/api/people/")
      .then((reponse) => {
        return reponse.json();
      })
      .then((data) => {
        //console.log(data.results);
        this.setState({
          listePersonnages: data.results,
        });
        //console.log(this.state.listePersonnages);
      }); */

    Axios.get("https://swapi.dev/api/people/").then((response) => {
      console.log(response.data.results);
      this.setState({
        listePersonnages: response.data.results,
      });
    });
  }

  render() {
    return (
      <div className="home">
        {/* <Search /> */}
        <div className="persosInfos">
          <ListPersos listePerso={this.state.listePersonnages} />
          <InfoPerso listePerso={this.state.listePersonnages} />
        </div>
      </div>
    );
  }
}

export default Home;
