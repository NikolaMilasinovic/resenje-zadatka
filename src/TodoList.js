import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    const { items, indexOfFirstPost } = this.props;
    const number = indexOfFirstPost + 1;
    return (
      <div className="container">
        {
          items.map((item, i) => (
            <TodoItem
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

TodoList.propTypes = {
  items: PropTypes.array.isRequired
}


TodoList.defaultProps = {
  items: []
}

const mapStateToProps = state => ({
  items: state.todo.items,
  indexOfFirstPost: state.todo.indexOfFirstPost
});

export default connect(mapStateToProps)(TodoList);
