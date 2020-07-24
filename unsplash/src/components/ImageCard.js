import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 }
    // image reference assigned as a instance variable on class ImageCard
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // image successfully displayed (loaded)
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  // need to determine space image occupied based on img height
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  }

  render() {
    // destructure
    const { description, urls } = this.props.image;

    return( 
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} /> 
      </div>
    );
  }
}

export default ImageCard;