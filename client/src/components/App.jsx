import React from "react";
import PhotoList from "./PhotoList";
import styles from "../css/App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    chrome.storage.sync.get(["images"], pics => {
      this.setState({
        photos: pics.images
      });
    });
  }

  render() {
    return (
      <div>
        <h1> Your Photos! </h1>
        <PhotoList photos={this.state.photos} />
      </div>
    );
  }
}
