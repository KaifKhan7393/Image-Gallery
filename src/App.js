import React, { useState, useEffect } from 'react';
import ImageCard from './Components/ImageCard';
import ImageSearch from './Components/ImageSearch';

const App = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=24688408-e35321bfaec1efce6f4c2bfdf&q=${term}&image_type=photo&pretty=true`)
            .then(res => res.json())
            .then(data => {
                setImages(data.hits);
                setIsLoading(false);
            })
            .catch(err => console.error(err + " api is not available"))
    }, [term]);
    return (
        <div className="container w-4/5 mx-auto mb-10">
            <ImageSearch searchText={(text) => setTerm(text)} />
            {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}
            {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-4 gap-3">
                {images.map(image => {
                    return <ImageCard key={image.id} image={image} />
                })}
            </div>
            }
        </div>
    )
}

export default App;