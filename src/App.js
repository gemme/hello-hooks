import { ControlledComponent } from "./components/ControlledComponent";
import { BadExample } from "./components/BadExample";
import { GoodExample } from "./components/GoodExample";
import { Container } from "./components/Container";
import { HookCounter } from "./components/HookCounter";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ThemeContext, themes } from "./components/theme-context";
import "./App.css";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "hello world",
      mount: false,
    };
  }

  render() {
    return (
      <ErrorBoundary>
        <ThemeContext.Provider
          value={themes.light}
        >
          <div className="App">
            <GoodExample data={this.state.data} />
            <Container data={this.state.data} theme={themes.dark}/>
          </div>
        </ThemeContext.Provider>
      </ErrorBoundary>
    );
  }

  /* render() {
    return (
      <div
        onClick={() => this.setState(prevState => {
          return {mount: !prevState.mount}
        })}
      >
        Click here to mount this component or unmount it
        {this.state.mount && <HookCounter />};
      </div>

    ); 
  } */

  componentDidMount() {
    setInterval(() => {
      console.log(this.state.data);
      this.setState((prevState) => {
        return {
          data: prevState.data + "z",
        };
      });
    }, 3000);
  }
}

export default App;
