var React = require('react');
var Film  = require('./Film.jsx');

var FilmList = React.createClass({

  propTypes: {
    films: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  render: function(){
    var filmNodes = this.props.films.map(function(film){
      return (<Film  url = {film.url} title = {film.title} showtime = {film.showtime}></Film> )
    })

    return (
      <div className = "film-list">
      { filmNodes }
      </div>
      );
  }
});

module.exports = FilmList;