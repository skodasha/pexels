import React from 'react';
import '../style/Body.css';
import { connect } from 'react-redux';
import { updatePhoto } from '../store/store';

function PhotoColumns(props) {
    let numberOfColumns = 3;
    if (props.width < 1000 && props.width > 600) {
        numberOfColumns = 2;
    } else if (props.width < 600) {
        numberOfColumns = 1;
    }
    //❤🧡🤍♡
    let photos = [];
    for (let i = 0; i < numberOfColumns; i++) {
        let n = 0;
        let photoElements = props.photos.filter(() => n++ % numberOfColumns === i).map( item =>
            <div className='photo'>
                <img src={ item.src.large2x }/>
                <div className='photo-info'>
                    <a href={ item.photographer_url } target="_blank" className='name'>{ item.photographer}</a>   
                    <button className='button-like' onClick={ (e) => {
                        props.updatePhoto(item, photos)
                    }}>
                    {
                        item.liked ? <div>🧡</div>: <div>🤍</div>
                    }
                    </button>
                </div>
            </div>
        );
        photos.push(<div className='photo-block'>{ photoElements }</div>);
    }

    return (
        <div className='photos'>
            {photos}
        </div>
    );
};

const mapStateToProps = (state) => ({
    photos: state
});

const mapDispatchToProps = {
    updatePhoto,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(PhotoColumns);