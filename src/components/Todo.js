import React, { useState } from "react"
import "./Todo.css"
const Todo=()=>{
    const[name,setName]=useState("");
    const[tableData,setTableData]=useState([]);
    const handleSubmit=()=>{
     setTableData([...tableData,{name:name,id:""}])
     setName("")
    }
    const handleDelete=(index)=>{
     const newTableData=tableData.filter((data,i)=>{
     return  index!==i
     
     });
     setTableData(newTableData)
}
 const handleEdit=(index)=>{
    setName(tableData[index].name);
 }
 const handleAddEdit=(index)=>{
    const updatevalue=tableData.map((todo,i)=>{
            if(i==index){
                todo.name=name;
            }
            return todo
    })
    setTableData(updatevalue)
 }
    return(
        <div id="container">
          <textarea id="task"  value={name} onChange={(e)=>{setName(e.target.value)}} />
          <button id="btn" onClick={handleSubmit} >Add</button>
         <table>
            <thead>
                <tr>
                <th>Enter name</th>
                <th></th>
                </tr>
                
            </thead>
            <tbody>
             {tableData.map((user ,index)=>{
                return(
                <tr key={index}>
                <td>{user.name}</td>
              <button onClick={()=>{handleDelete(index)}}>Delete</button>
              <button onClick={()=>{handleEdit(index)}}>Edit</button>
              <button onClick={()=>{handleAddEdit(index)}}>AddEdit</button>
                </tr>
                )
             })}
            </tbody>
         </table>
        </div>
    )
}
export default Todo
// ----------------------usestate---------------------------
// import {useReducer,useState} from "react";
// import { ADD,EDIT,DELETE } from "./action";
// const Todo=()=>{
//     const[todo,setTodo]=useState("")
//     const reducer=(state,action)=>{
//      switch(action.type){
//         case ADD :
//             return[...setTodo,{value:todo,order:state.legth+1}]
//         case EDIT:
//             return
//         case DELETE:
//             return
//         default:
//             return state

//      }
//     }
//     const[state,dispatch]=useReducer(reducer,[])
//     return(
//     <>
//     <section className="container">
//         <section className="Todo">
//             <h3>Todo App</h3>
//             <section className="TodoInput">
//             <textarea id="task"  value={todo} onChange={(e)=>{setTodo(e.target.value)}}></textarea>
//          <button id="btn" onClick={()=>{dispatch({type:ADD})}}>AddTODO</button>
//             </section>
//         </section>
//     </section>
//     </>
//     )
// }

// export default Todo