import React, { Component } from "react"
import tableau from "tableau-api"
import Axios from "axios"

class Tableau extends Component {
  componentDidMount() {
    this.initViz()
  }

  initViz() {
    const vizUrl = "https://10az.online.tableau.com/javascripts/api/viz_v1.js"
    Axios.get(vizUrl).then(response => console.log(response))
    // const vizContainer = this.vizContainer
    // let viz = new window.tableau.Viz(vizContainer, vizUrl)
  }

  render() {
    return (
      <div
        ref={div => {
          this.vizContainer = div
        }}
      />
    )
  }
}

export default Tableau
