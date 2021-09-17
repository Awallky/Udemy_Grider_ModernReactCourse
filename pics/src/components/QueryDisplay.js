// import { ImageList, ImageListItem } from '@material-ui/core';
import './QueryDisplay.css'
import ImageCard from './ImageCard';

const QueryDisplay = (props) => {
    return (
        <div className="image-list">
            {
                props &&
                props.urlResults &&
                props.urlResults &&
                props.urlResults.map(element => {
                    return (
                        <ImageCard
                            image={element}
                            key={element.id}
                        />
                    );
                })
            }
        </div>
    );
}


export default QueryDisplay;

// return (
//         <ImageList rowHeight={ 450 } key={1}>
//             {
//                 props &&
//                 props.urlResults &&
//                 props.urlResults &&
//                 props.urlResults.map(element => {
//                     return (
//                         <ImageListItem key={element.id}>
//                             <img key={element.id} alt="" src={element.urls.regular} />
//                         </ImageListItem>
//                     );
//                 })
//             }
//         </ImageList>
//     );
