import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    idNo: "",
    class: "",
    email: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      idNo: "",
      class: "",
      email: ""
    });
  };

  render() {
    return (
      <form>
        <TextField
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="dateOfBirth"
          placeholder="Date of Birth"
          value={this.state.dateOfBirth}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="idNo"
          placeholder="ID Number"
          value={this.state.idNo}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="class"
          placeholder="Class"
          value={this.state.class}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="email"
          placeholder="e-mail"
          value={this.state.email}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}

export default Form;
