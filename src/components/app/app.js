import React, {Component} from 'react';


import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from "../item-add-form";

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoDate: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
    };

    deleteItem = (id) =>{
        this.setState(({todoDate}) =>{
            const idx = todoDate.findIndex((el)=> el.id === id);

            const before = todoDate.slice(0, idx);
            const after = todoDate.slice(idx+1);

            const newArray = [...before, ...after];
            return {
                todoDate: newArray
            }
        });
    };

    addItem = (text) =>{
      // generate id?
      const newItem = {
          label: text,
          important: false,
          id: this.maxId++
      };

      this.setState(({todoDate}) =>{
          const newArr = [
              ...todoDate,
              newItem
          ];
          return{
              todoDate: newArr
          }
      });
        //add element in array?
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList todos={this.state.todoDate}
                          onDeleted={this.deleteItem}/>
                 <div className="add-item__inner">
                     <AddItem onItemAdded ={this.addItem}/>
                 </div>
            </div>
        );
    }
};

