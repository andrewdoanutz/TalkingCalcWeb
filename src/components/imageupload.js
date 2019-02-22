import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';

export default class Upload extends Component {
  constructor(props) {
    super(props);
     this.state = { pictures: [] };
     this.onDrop = this.onDrop.bind(this);
}

onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
}

render() {
    return (
        <ImageUploader
            withIcon={false}
            buttonText='Choose image'
            onChange={this.onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
        />
    );
}
}
