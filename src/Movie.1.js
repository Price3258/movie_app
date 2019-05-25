import React, { Component } from 'react';

//import MoviePoster from './MoviePoster';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'

import './Movie.css';

class Movie extends Component {


    render(){
        //console.log(this.props);
        const movies= this.props;
        return(
            <div className="Movie">
                <div className="Movie__Column"> 
                <MoviePoster poster={movies.poster} alt={movies.alt}/>
                </div>
                <div className="Movie__Column"> 
                    <h1> {movies.title}</h1>
                </div>
                <div className="Movie__Genres">
                    {movies.genres.map ( (genres,index) => <MovieGenre genres={genres} key={index} /> )}
                </div>
                <div className="Movie__Synopsis">
                <LinesEllipsis
                    text={movies.synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    /> 
                </div>
              
            </div>
        );
    }
}




// class MoviePoster extends Component{

//     static propsTypes ={
//         poster: PropTypes.string.isRequired  
//     }

//     render(){
       
//         const image= this.props; 
        
//         return(
//             <img alt={image.alt} src={image.poster} />
//         )
//     }
// }

function MoviePoster( {poster,alt} ){
    return (
        <img  src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}
// MoviePoster 는 그냥 return 만 하기 때문에 functional로 만들어도 됨.
// render도 없고 , 뭐 업데이트 이런거 없고, state도 없음. 

function MovieGenre( {genres} ){
    return (
        <span className="Movie__Genre"> {genres} </span>
    )
}


Movie.propsTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres :  PropTypes.string.isRequired,
    synopsis :  PropTypes.string.isRequired
}

MoviePoster.propsTypes={
    poster :  PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

MovieGenre.propsTypes={
    genres :  PropTypes.string.isRequired
}


export default Movie;
