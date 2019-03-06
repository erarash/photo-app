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
    //e.target.src = img url
    e.persist();
    for (let i = 0; i < this.state.photos.length; i++) {
      if (this.state.photos[i] === e.target.src) {
        this.state.photos.splice(i, 1);
        this.setState({
          photos: this.state.photos
        });
      }
    }
    chrome.storage.sync.set({ images: this.state.photos }, () => {
      console.log("updated");
    });
  }

  render() {
    if (!this.state.photos) {
      return (
        <div className={styles.welcomeMessage}>
          <h1>ADD SOME PHOTOS!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className={styles.welcomeMessage}> Your Photos! </h1>
          <PhotoList photos={this.state.photos} delete={this.deletePic} />
        </div>
      );
    }
  }
}
