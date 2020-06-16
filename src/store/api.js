import { createClient } from 'pexels';

function getPhotos(page){
    const client = createClient(process.env.REACT_APP_ACCESS_KEY);
    return client.photos.curated({ page: page }).then(res => res);
}

export default getPhotos


