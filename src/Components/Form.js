import React from "react";
import axios from "axios";

class Form extends React.Component {
  state = {
    userName: "",
    error: false
  };
  handleSubmit = async event => {
    event.preventDefault();
    axios.get(
      `https://api.github.com/users/${this.state.userName}`
    ).then(res => {
      this.props.onSubmit(res.data);
      this.setState({ userName: "", error: false });
    }).catch(() => this.setState({error: true}));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          style={{ 'color': this.state.error ? 'red' : 'black'}}
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

export default Form;
