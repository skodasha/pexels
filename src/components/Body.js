import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import '../style/Body.css';

import PhotoColumns from './PhotoColumns';
import Loader from './Loader';

import { fetchPhotos, addPhotos } from '../store/store';

function Body({ fetchPhotos, photos, addPhotos }) {
    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height }
    };

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    let [page, setPage] = useState(1);

    const nextPhotos = () => {
        setPage(page + 1);
        addPhotos(page);
    };

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        nextPhotos();
    }, []);

    useEffect(() => {
    }, [photos]);
    
    return (
        <div className='app'>
            {
                (photos.length === 0)
                ? <Loader/>
                : <InfiniteScroll
                    dataLength={ photos.length } 
                    next={ nextPhotos }
                    hasMore={ photos.length < 100 }
                    loader={ Loader }
                    endMessage={
                        <h1>...</h1>
                    }
                    scrollThreshold={ 0.65 }
                    className='scroll'
                    >

                    <PhotoColumns width={ windowDimensions.width } photos={ photos }/>
                </InfiniteScroll>
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    photos: state
});

const mapDispatchToProps = {
    fetchPhotos,
    addPhotos,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Body);