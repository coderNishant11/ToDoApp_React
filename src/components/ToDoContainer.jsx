/* eslint-disable react/prop-types */
import ToDo from './ToDo'


const ToDoContainer = ({ items, removeItem}) => {
   
    return <div className="kg-row todo-container">
        {items.map(item => <ToDo key={item.id} item={item } removeItem={removeItem} />)}
        
        </div>
    
}


export default ToDoContainer;