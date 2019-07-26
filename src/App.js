import React, { Component } from "react";
import { Button, Input } from "@stardust-ui/react";
import Iframe from "react-iframe";
import { withRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    newAddress: "",
    address: "https://www.bing.com"
  };

  onBack = event => {
    this.props.history.goBack();
  };

  onForward = event => {
    this.props.history.goForward();
  };

  onChange = event => {
    this.setState({ newAddress: event.target.value });
  };

  onKeyDown = event => {
    if (event.key === "Enter") {
      this.navigate();
    }
  };

  onClick = event => {
    this.navigate();
  };

  navigate() {
    let address = this.state.newAddress;
    if (address.startsWith("http://")) {
      address = address.replace("http://", "https://");
    } else if (!address.startsWith("https://")) {
      address = "https://" + address;
    }

    this.setState({
      newAddress: address,
      address: address
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <Button
            className="Button"
            icon={{
              name: "chevron-down",
              rotate: 90
            }}
            iconOnly
            onClick={this.onBack}
          />
          <Button
            className="Button"
            icon={{
              name: "chevron-down",
              rotate: -90
            }}
            iconOnly
            onClick={this.onForward}
          />
          <Input
            fluid
            placeholder="Type a URL..."
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            value={this.state.newAddress}
          />
          <Button
            className="Button"
            icon="play"
            iconOnly
            onClick={this.onClick}
          />
        </div>
        <div class="Scroller">
          <Iframe src={this.state.address} width="100%" height="100%" />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
