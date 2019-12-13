import React, { Component } from 'react';
import PropTypes from 'prop-types';
import refresh from './refresh.png';
import { fetchTodo } from "./store/todos/actions";
import { connect } from "react-redux";


class AddTodo extends Component {

 
  render() {
    return (
      <div className="header">
        <div className="headeTitle">
          <h3>Hacker News</h3>
        </div>
        <div className="refresh">
          <span onClick={this.props.fetchTodo}><img src={refresh}/></span> 
        </div>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addItem: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  fetchTodo
};

export default connect(null, mapDispatchToProps)(AddTodo);
