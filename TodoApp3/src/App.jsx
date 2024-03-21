import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";


function App(){

  const initialtodoItems = [
   {
    name : "Buy Milk",
    dueDate : "04/10/2023"
   },
   {
    name : "Go to college",
    dueDate : "04/10/2023"
   },
   {
    name : "Like this video",
    dueDate : "04/10/2023"
   }
  ];

  const[todoItems, setTodoItems] = useState(initialtodoItems);
  
  const handleNewItem = (itemName, itemDueDate) => { 
    setTodoItems((currValue)=>[...currValue, {name : itemName, dueDate : itemDueDate}]);
    

 
}

const handleDeleteItem = (todoItemName) => {
  const newTodoItems = todoItems.filter (item => item.name !== todoItemName);
  setTodoItems(newTodoItems);
}




 return <center className='todo-container'>
   
   <AppName/>
   <AddToDo onNewItem={handleNewItem}/>
   
   {todoItems.length  === 0 && <WelcomeMessage></WelcomeMessage>}
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    
    </center>

}
export default App;