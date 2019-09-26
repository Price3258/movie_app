import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import axios from 'axios';



class App extends Component {
  
  // componentWillMount(){
  //   console.log('will mount');
  // }
  state ={
    movies: 0
   
  }
 
  componentDidMount(){
    //console.log('did mount'); 
    this._getMovies();

   }

  _renderMovies = () =>{
    const movies = this.state.movies.map( (movie) => {
      return <Movie key={movie.id} 
       title={movie.title}
       poster={movie.medium_cover_image} 
       alt={movie.title}
       genres={movie.genres} 
       synopsis ={movie.synopsis}


      />
    })
  // react 자체 기능과 내가 만든 function을 구분짓기 위해 _ underbar 를 사용. 

    return movies;
  }

   _getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };


  render(){
      return (
        <div className={this.state.movies ? "App" :"App--loading"}>
          { this.state.movies ? this._renderMovies() : 'Loading'}
         
        </div>
      );
  }
}

export default App;
