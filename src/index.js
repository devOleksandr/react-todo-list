import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from "./components/app-header";
import TodoList from "./components/todo-list";
import SearchPanel from "./components/search-panel";


const App = () =>{
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList items = {['item1', 'item2']}/>
        </div>
    );
};



ReactDom.render(<App/>, document.getElementById('root'));