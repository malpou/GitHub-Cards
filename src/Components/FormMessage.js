import React from "react";

class FormMessage extends React.Component {
  render() {
    if (this.props.error) {
      return (<span style={{ "color": "red"}}>
        {this.props.message}
      </span>);
    }
    return <span></span>
  }
}

export default FormMessage;