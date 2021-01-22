import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.nilai = "Pekora";
    this.state = {
        nilai:"Pekora"
    }
  }

  onChangeEmail = (nilai) => {
    this.setState({nilai:nilai.target.value})
    console.log(this.nilai);
  }

  render() {
    return (
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Input something here!
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder=".... Usada Pekora Peko Peko Peko ...."
            onChange={this.onChangeEmail}
          />
          <div id="emailHelp" class="form-text">
            <p class="card-text">
            </p>
          </div>
        </div>
      </form>
    );
  }
}
export default Input;
