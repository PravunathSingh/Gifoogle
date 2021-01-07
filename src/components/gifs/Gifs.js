import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Gif from './Gif';

class Gifs extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const {gifs, heading} = value;
                    if(gifs === undefined || gifs.length === 0) {
                        return <Spinner />;
                    }
                    else{
                        return (
                            <React.Fragment>
                                <h2 className="text-center mb-4 heading">{heading}🤩</h2>
                                <div className="row">
                                    {gifs.map(gif => (
                                        <Gif gif={gif} key={gif.id} />
                                    ))}
                                </div>
                            </React.Fragment>
                        )
                    }
                }}
            </Consumer>
        )
    }
}

export default Gifs;