import React, { Component } from 'react';
import {Consumer} from '../../context';
import axios from 'axios';

class SearchGif extends Component {
    state = {
        gifQuery: ''
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    onGifSearch = (dispatch, e) => {
        e.preventDefault();

        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=0uMselzUyP89MZ3WBoni3gc3xpnfEc9b&q=${this.state.gifQuery}&limit=30&offset=0&rating=r&lang=en`)
            .then(res => {
                dispatch({
                    type: 'SEARCH_GIF',
                    payload: res.data.data
                });
                this.setState({gifQuery: ''})
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card card-body search mb-5 p-3">
                            <h2 className="display-4 text-center header mb-5">
                                Search GIFs
                            </h2>
                            <form onSubmit={this.onGifSearch.bind(this, dispatch)}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg"
                                        placeholder="Get Gifs..."
                                        name="gifQuery"
                                        value={this.state.gifQuery}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-lg btn-block">
                                    Let's GO <i className="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default SearchGif;