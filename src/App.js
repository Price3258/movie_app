import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



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
    const movies = await this._callApi();
    console.log(movies);
    this.setState({
      movies
    })
  }


  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(res => res.json())
    .then(json => json.data.movies)
    .catch(err => console.error(err))
  }


  render(){
      return (
        <div className={this.state.movies ? "App" :"App--loading"}>
          { this.state.movies ? this._renderMovies() : 'Loading'}
         
        </div>
      );
  }
}

export default App;
