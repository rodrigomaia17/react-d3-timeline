import d3 from 'd3';
import React from 'react';
import ReactFauxDOM from 'react-faux-dom';

export default class Timeline extends React.Component {
  render() {
    var el = ReactFauxDOM.createElement('div')

    // Change stuff using actual DOM functions.
    // Even perform CSS selections!
    el.style.setProperty('background-color', 'red')
    el.style.setProperty('width', '100px')
    el.style.setProperty('height', '100px')
    el.setAttribute('class', 'box')

    // Render it to React elements.
    return el.toReact()
  }

}
