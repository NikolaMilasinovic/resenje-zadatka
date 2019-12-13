import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsDetails from './NewsDetails';
import { connect } from "react-redux";

class NewsList extends Component {
  render() {
    const { items, indexOfFirstPost } = this.props;
    const number = indexOfFirstPost + 1;
    return (
      <div className="container">
        {
          items.map((item, i) => (
            <NewsDetails
              key={item.id}
              item={item}
              number={number + i}
            />
          ))

        }
      </div>
    )
  }
}





const mapStateToProps = state => ({
  items: state.news.items,
  indexOfFirstPost: state.news.indexOfFirstPost
});

NewsList.defaultProps = {
  items: []
}

NewsList.propTypes = {
  items: PropTypes.array.isRequired,
  indexOfFirstPost: PropTypes.number.isRequired
}


export default connect(mapStateToProps)(NewsList);
