import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import Form from "../components/Form";
import Table from "../components/Table";

injectTapEventPlugin();

class App extends Component {
  state = {
    data: [],
    editIndex: -1
  };

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIndex: i });
  };

  stopEditing = () => {
    this.setState({ editIndex: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map((row, j) =>
        j === i ? { ...row, [name]: value } : row
      )
    }));
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })
            }
          />
          <Table
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIndex={this.state.editIndex}
            handleChange={this.handleChange}
            stopEditing={this.stopEditing}
            data={this.state.data}
            header={[
              {
                name: "First name",
                prop: "firstName"
              },
              {
                name: "Last name",
                prop: "lastName"
              },
              {
                name: "Date of Birth",
                prop: "dateOfBirth"
              },
              {
                name: "ID Number",
                prop: "idNo"
              },
              {
                name: "Class",
                prop: "class"
              },
              {
                name: "Email",
                prop: "email"
              }
            ]}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
