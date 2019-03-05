import React from "react";
import PhotoList from "./PhotoList";
import styles from "../css/App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
    this.deletePic = this.deletePic.bind(this);
  }

  componentDidMount() {
    chrome.storage.sync.get(["images"], pics => {
      this.setState({
        photos: pics.images
      });
    });
  }

  deletePic(e) {
    //e.target.src === img url
    e.persist();
    let toRemove = [];
    chrome.storage.sync.get(null, function(data) {
      for (let i = 0; i < data.images.length; i++) {
        if (data.images[i] === e.target.src) {
          toRemove.push(i);
        }
      }
    });
  }

  render() {
    return (
      <div>
        <h1> Your Photos! </h1>
        <PhotoList photos={this.state.photos} delete={this.deletePic} />
      </div>
    );
  }
}
