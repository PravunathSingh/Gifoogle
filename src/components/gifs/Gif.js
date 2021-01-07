import React from 'react';
import {Link} from 'react-router-dom';

const Gif = ({gif}) => {
    return (
        <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="card shadow-sm mb-4 bg-dark">
                <img src={gif.images.original.url} alt={gif.title} className="img-fluid mb-3"/>

                <h6 className="card-title header px-2">{gif.title}</h6>
            </div>
        </div>
    )
}

export default Gif
