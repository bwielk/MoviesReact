var React = require('react');
var FilmList = require('./FilmList.jsx');

var sampleMovies = [
  {
    id: 1, title: "Sausage Party", url: "http://www.imdb.com/title/tt1700841/?ref_=fn_al_tt_1", showtime: "http://www.imdb.com/showtimes/title/tt1700841"
  },

  {
    id: 2, title: "Things To Come", url: "http://www.imdb.com/title/tt4120176/?ref_=nv_sr_1", showtime: "http://www.imdb.com/showtimes/title/tt0028358"
  }
];

var FilmContainer = React.createClass({
  getInitialState: function(){
    return {data: sampleMovies}
  },

  render: function(){
    return (
      <div className = "film-container">
        <FilmList films ={this.state.data}/>
      </div>
      );
  }
});

module.exports = FilmContainer;



