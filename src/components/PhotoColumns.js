import React, { useState } from 'react';
import '../style/Body.css';
import '../style/Modal.css';
import '../App.css';
import { connect } from 'react-redux';
import { updatePhoto } from '../store/store';
import Modal from 'react-modal';

function PhotoColumns(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [item, setItem] = useState({src: '', id: ''})

    function closeModal(){
        setIsOpen(false);
    }

    function openModal(photo){
        setItem(photo)
        setIsOpen(true)
    }

    let numberOfColumns = 3;
    if (props.width < 900 && props.width > 600) {
        numberOfColumns = 2;
    } else if (props.width < 600) {
        numberOfColumns = 1;
    }

    const likeClick = (item) => {
        let index = likedPhotos.indexOf(item.id) 
        index === -1 ? likedPhotos.push(item.id) : likedPhotos.splice(index, 1);
        localStorage.setItem('likes', JSON.stringify(likedPhotos))
        props.updatePhoto(item, props.photos)
    }

    let likedPhotos = JSON.parse(localStorage.getItem('likes')) || []
    let photos = [];
    for (let i = 0; i < numberOfColumns; i++) {
        let n = 0;
        let photoElements = props.photos.filter(() => n++ % numberOfColumns === i).map( item =>
            <button className='photo' onClick={ (e) => { openModal(item) }}>
                <img src={ item.src.large2x }/>
                <div className='photo-info'>
                    <a href={ item.photographer_url } target="_blank" className='name'>{ item.photographer}</a>   
                    <button className='button-like' onClick={ (e) => {
                        likeClick(item)
                    }}>
                    {
                        likedPhotos.includes(item.id) ? <div>🧡</div>: <div>🤍</div>
                    }
                    </button>
                </div>
            </button>
        );
        photos.push(<div className='photo-block'>{ photoElements }</div>);
    }
    
    return (
        <div className='photos'>
            {photos}
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel='Photo'
                id='modal'
                shouldCloseOnOverlayClick={true}
            >
            <img src={item.src.large2x} className='image'/>
            <div className='buttons'>
                <button className='' onClick={ (e) => {}}>free download</button>
                <br/>
                <button className='button-like' onClick={ (e) => {
                        likeClick(item)
                }}>
                {
                    likedPhotos.includes(item.id) ? <div>🧡</div>: <div>🤍</div>
                }
                </button>
            </div>
            <button onClick={closeModal} className='closeButton'>✖</button>
            </Modal>
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