import React, { Component } from 'react';
import PropTypes from 'prop-types';


// function MoviePoster({poster, alt}){
//     return (
//         <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
//     )
// }

class MoviePoster extends Component{
    

    render(){
        const poster = this.props.poster;
        const alt = this.props.alt;
        return(
            <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
        );
    }
}


MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default MoviePoster;