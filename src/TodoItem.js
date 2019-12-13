import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {mapTime} from './mapTime';

class TodoItem extends Component {



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

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  deleteItem: PropTypes.func,
  checkItem: PropTypes.func
}


TodoItem.defaultProps = {
  items: {}
}
export default TodoItem;




// import React, { Component } from 'react';
// import PropTypes from 'prop-types'

// class TodoItem extends Component {

 

//   render() {
//     const { number, item } = this.props;
//     console.log(item);
//     console.log(number);
//     // const className = item.checked ? "itemCompleted" : "itemNotCompleted";
//     return (
//       <div className="itemNotCompleted">
//         <p>
//           <span>{number} </span>{item}
//         </p>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   indexOfLastPost : state.todo.indexOfLastPost,
//   indexOfFirstPost: state.todo.indexOfFirstPost
// });


// TodoItem.propTypes = {
//   item: PropTypes.object.isRequired,
//   deleteItem: PropTypes.func,
//   checkItem: PropTypes.func
// }


// TodoItem.defaultProps = {
//   items: {}
// }
// export default TodoItem;
