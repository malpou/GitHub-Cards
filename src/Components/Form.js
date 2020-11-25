import React from "react";
import axios from "axios";
import FormMessage from "./FormMessage";

class Form extends React.Component {
  state = {
    userName: "",
    error: false
  };
  handleSubmit = async event => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        this.props.onSubmit(res.data);
        this.setState({ userName: "", error: false });
      })
      .catch(() => this.setState({ error: true }));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} class="container">
        <div class="item">
          <input
            type="text"
            value={this.state.userName}
            onChange={event => this.setState({ userName: event.target.value })}
            placeholder="GitHub username"
            required
          />
          <button>Add card</button>
        </div>
        <div class="break"></div>
        <div class="item">
          <FormMessage message="Wrong Username" error={this.state.error} />
        </div>
      </form>
    );
  }
}

export default Form;
