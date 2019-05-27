import React, { Component } from 'react';
import PropTypes from 'prop-types';


function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}



MovieGenre.propTypes ={
    genre: PropTypes.string.isRequired
}


export default MovieGenre;