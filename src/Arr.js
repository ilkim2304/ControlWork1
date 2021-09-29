import React from "react"

export default class Arr extends React.Component {
    render() {
      return <div className="arr">
        <select>
          <option>{this.props.txt}</option>
          
        </select>
      </div>
    }
  }