var React = require('react');

var Film = React.createClass({

  render: function(){
    return (
      <div className = "film">
      <ul>
      <li>
      <a href = {this.props.url}><h4>{this.props.title}</h4></a>
      <a href = {this.props.showtime}></a>
      </li>
      </ul>
      </div>
    )
  }
});

module.exports = Film;