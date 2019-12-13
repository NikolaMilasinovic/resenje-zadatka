import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {mapTime} from '../services/mapTime';

class NewsDetails extends Component {



  render() {
    const {item, number} = this.props;


    return (
      <div className="itemNotCompleted">
        <p>
          <span>{number}. </span><a target="_blank" href={item.url}>{item.title} </a>
          <span className="gray"> <a target="_blank" href={item.url}>{
            item.url && `(${item.url.split('/')[2]}) ` 
          }</a></span><br/>
          <span>{item.score} points </span>
          <span><span className="gray">by</span> {item.by}</span>
          <span className="gray"> {mapTime(item.time)}</span>
          <span> | </span>
          <span><a target="_blank" href={`https://news.ycombinator.com/item?id=${item.id}`}>{item.kids ? item.kids.length : 0} comments</a></span>
        </p>
      </div>
    )
  }
}

NewsDetails.propTypes = {
  item: PropTypes.object.isRequired,
  number: PropTypes.number.isRequired
}


NewsDetails.defaultProps = {
  items: {}
}
export default NewsDetails;




