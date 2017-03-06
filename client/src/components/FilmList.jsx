var React = require('react');
var Film  = require('./Film.jsx');

var FilmList = React.createClass({



render: function(){
  var filmNodes = this.props.comments.map(function(comment){
    return (<Film  url = {this.props.url} title = {this.props.title} showtime = {this.props.showtime}></Film> )
  })

  return (
    <div className = "film-list">
    { filmNodes }
    </div>
    );
}
});

module.exports = FilmList;