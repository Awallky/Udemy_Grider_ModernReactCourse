import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = { spans: 0 };
    }
    setSpans = () => {
        const ht = this.imageRef.current.clientHeight;
        const spans = Math.ceil(ht / 10);
        this.setState({ spans });
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    alt={description}
                    src={urls.regular}
                    ref={this.imageRef}
                />
            </div>
        )
    }
}

export default ImageCard;
