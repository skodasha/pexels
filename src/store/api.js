import { createClient } from 'pexels';

function getPhotos(page, search){
    const client = createClient(process.env.REACT_APP_ACCESS_KEY);
    if (search) {
        return client.photos.search({ query: search, page: page }).then( res => res)
    }
    return client.photos.curated({ page: page }).then(res => res);
}

export default getPhotos


