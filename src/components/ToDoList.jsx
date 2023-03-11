import react, { useState } from "react";
import { TrashEmoji } from "./TrashEmoji";

export function ToDoList() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  return (
    <section className="vh-100 gradient-custom-2">
    <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-12 col-xl-10">
        <div className="card mask-custom bg-transparent text-white">
        <div className="card-body p-4 text-white">
       
        <div className="text-center text-white pt-3 pb-2">
              
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp" alt="Check" width="60" />
    
              <h2 className="my-4">To Do List</h2>

            </div>
<div className="d-flex justify-content-center">
            <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}


        onKeyDown={(e)=> {
            if (e.key === "Enter"){
                const newList = [...list, {"task":input, "complete":false}];
                setList(newList);
                setInput("");
            }
        }}
        rows="1"
        size="80"
        placeholder="Type in any task here. Press the ENTER key to add the task to the TO-DO list below."
      />
</div>
            <table className="table mb-0 text-white">
            <thead>
                <tr>
                  <td scope="col" width="100%">Task</td>
                  <td scope="col">Actions</td>
                </tr>
              </thead>
              <tbody>
                <tr><td></td><td></td></tr>
                <tr><td></td><td></td></tr>
                

                  {list.map(
            (item, index) => {

                if (item.complete) return null;
                return ( 
                    <tr class="fw-normal">
                    <td class="align-middle"
                    width="100%">
                <span key={index}>
                    {item.task}
                </span>
                </td>
                <td> 
                   <div onClick={()=>{
                    const newList = [...list];
                    newList[index].complete=true;
                    setList (newList);
                }

                   }><TrashEmoji /></div>
                  </td>
                </tr>
                );
            }
        )
        }
              </tbody>
            </table>
     
      <ul>
        
              </ul>
              </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
