import { ImageList, ImageListItem } from '@material-ui/core';

const QueryDisplay = (props) => {
    return (
        <ImageList rowHeight={ 450 } key={1}>
            {
                props &&
                props.urlResults &&
                props.urlResults &&
                props.urlResults.map(element => {
                    return (
                        <ImageListItem key={element.id}>
                            <img key={element.id} alt="" src={element.links.download} />
                        </ImageListItem>
                    );
                })
            }
        </ImageList>
    );
}


export default QueryDisplay;
