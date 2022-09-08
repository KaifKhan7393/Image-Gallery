import React from 'react';

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image.webformatURL} alt="Pixabay Images" className="w-full h-48" />
            <div className="px-6 py-4">
                <div className="font-bold text-teal-500 text-xl mb-2">
                    Photo by <span className="uppercase indent-0.25"> {image.user}</span>
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, index) => {
                    return <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 mt-3 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>
                })}
            </div>
        </div>
    )
}

export default ImageCard;