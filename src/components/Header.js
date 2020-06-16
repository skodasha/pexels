import React, { useEffect, useState } from 'react';
import { createClient } from 'pexels';

import '../style/Header.css';
import back from '../pictures/back.png';

function Header () {
    const client = createClient(process.env.REACT_APP_ACCESS_KEY);
    const categories = ['laugh', 'smile', 'man', 'skin', 'face', 'dentist', 'mouth', 'family', 'couple', 'love', 'people',
    'dance', 'apple', 'coding', 'depression', 'covid', 'mirror', 'lonely', 'pose', 'calm', 'map', 'natural', 'sad', 'vintage',
    'jesus', 'adult', 'wedding', 'community', 'business', 'fitness', 'eat', 'healthy', 'flowers', 'cat', 'dog', 'camera', 'sea',
    'ocean', 'office', 'shop'];
    const COUNT_CATEGORIES = 7;

    let [backgroundURL, setBackgroundURL] = useState(back);
    let [photographer, setPhotographer] = useState({ name: '', url: '' });

    const fetchImages = () => {
        client.photos.random().then( photo => {
            setBackgroundURL(photo.src.landscape)
            setPhotographer({ name: photo.photographer, url: photo.url })
        })
    };

    const shuffleArr = (a, b) => {
        return Math.random() - 0.5
    }

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div className='header'>
            <div className='header-background'>
                <img className='img-back' src={ backgroundURL } alt='back'></img>
            </div>
            <h1 className='header-title'>The best free stock photos shared by <br/> talent photographers.</h1>
            <div className='search'>
                <input className='input' placeholder='Search for free photos and videos'/>
                <button className='search-button'/>
            </div>
            <div className='hints'>
                <h2>Suggested: </h2>
                <ul className='categories'>
                    {
                        categories.sort(shuffleArr).slice(0,COUNT_CATEGORIES).map( (item, index) => {
                            if(index == COUNT_CATEGORIES - 1)
                                return <li><a href='#'>{ item }</a></li>
                            
                            return <li><a href='#'>{ item },</a></li>
                        })
                    }
                </ul>
            </div>
            <div className='author'>
                <a href={ photographer.url } target="_blank">Photo by { photographer.name }</a>
            </div>
        </div>
    )
}

export default Header