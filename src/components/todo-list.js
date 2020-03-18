import React from "react";
import TodoListItem from "./todo-list-item";

const  TodoList = ({ todos }) =>{

    const elements = todos.map((item)=>{
        return(
            // <li>
            //     <TodoListItem
            //         label = {item.label}
            //         important={item.important}/>
            // </li>
            //Когда имена свойсв компонентов совпадают с именами свойсв обекта который мы используем можна использоваь Spread поператор для обекта
            <li>
                <TodoListItem {...item}/>
            </li>
        );
    });

    return(
        <ul>
            {elements}
        </ul>
    );
};

export default TodoList;