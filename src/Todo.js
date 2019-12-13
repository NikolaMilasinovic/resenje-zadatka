import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Loading from './Loading';
import { fetchTodo,getMoreNews,getPrevNews } from "./store/todos/actions";
import { connect } from "react-redux";


class Todo extends Component {

  componentDidMount() {
    this.props.fetchTodo();
    setInterval(() => { this.props.fetchTodo()}, 30000);
  }


  render() {
    if (this.props.loading) {
      return <Loading/>
    }
    if (this.props.error) {
      return <h1>{this.props.error}</h1>
    }
    return (
      <div className="Todo ">
        <AddTodo addItem={this.addItem} />
        <TodoList/>
        <div className="container btn">
        {
          this.props.currentPage === 1 ? <span onClick={this.props.getMoreNews}>More</span> : (


            <div>
            <span onClick={this.props.getPrevNews}>Prev</span><span> | </span>
            <span onClick={this.props.getMoreNews}>More</span>
            </div>
          )
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.todo.loading,
  error: state.todo.error,
  currentPage: state.todo.currentPage
});

const mapDispatchToProps = {
  fetchTodo,
  getMoreNews,
  getPrevNews
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);








// import React, { Component } from 'react';
// import TodoList from './TodoList';
// import AddTodo from './AddTodo';
// import { akcijaProba,getMoreNews,fetchTodo,getPrevNews } from "./store/todos/actions";
// import { connect } from "react-redux";
// import { uuid } from 'uuidv4';

// class Todo extends Component {

//   componentDidMount() {
//     this.props.fetchTodo(this.props.currentPage)
//     setInterval(() => { this.props.fetchTodo(this.props.currentPage) }, 15000)
    
//   }


//   render() {
//     if (this.props.loading) {
//       return <>Loading. . . </>
//     }
//     if (this.props.error) {
//       return <h1>{this.props.error}</h1>
//     }
//     return (
//       <div>
//         <TodoList/>
//       </div>
     
//     );
//   }
// }

// const mapStateToProps = state => ({
//   loading: state.todo.loading,
//   error: state.todo.error,
//   currentPage: state.todo.currentPage

// });

// const mapDispatchToProps = {
//   getMoreNews,
//   fetchTodo,
//   getPrevNews
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Todo);
