var React = require('react');
var ReactDOM = require('react-dom');
var CommentContainer = require('./components/FilmContainer.jsx');

window.onload = function(){
  ReactDOM.render(
    <FilmContainer />,
    document.getElementById('app')
  );
}
