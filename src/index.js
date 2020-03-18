import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from "./components/app-header";
import TodoList from "./components/todo-list";
import SearchPanel from "./components/search-panel";


const App = () =>{
    const todoData = [
        {label : 'Drink Coffee', important: false},
        {label : 'Make awesome App', important: true},
        {label : 'Have a lunch', important: false},
    ];
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
    );
};



ReactDom.render(<App/>, document.getElementById('root'));