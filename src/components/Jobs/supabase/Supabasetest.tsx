

import { useState, useEffect } from "react"
//import Auth from "./Auth";
//import React , useState from 'react'
import { supabase } from "../../../superbase-client";

interface Task {
    id: number,//
    title: string,
    description: string,
    created_at: string
}

const Supabasetest = () => {
    const [newTask, setNewTask] = useState({title: "", description: ""});
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newDescription, setNewDescription] = useState("");

    const fetchTasks = async () => {
        const {error, data} = await supabase
        .from("Tasks")
        .select("*")
        .order("created_at", {ascending: true})

        if(error) {
            console.error("Error reading task: ", error.message);
            return;
        }
        setTasks(data)
    }

    useEffect(() => {
        fetchTasks();
    },[]);

    console.log(tasks)

       const deleteTask = async(id: number) => {

        const { error } = await supabase.from("Tasks").delete().eq("id", id)
        if(error) {
            console.error("Error deleting task:", error.message);
            return;
        }
    }

        const updateTask = async(id: number) => {

        const { error } = await supabase.from("Tasks").update({description: newDescription})
        .eq("id", id) //eq just means when that id is the same as the passed id
        if(error) {
            console.error("Error updating task:", error.message);
            return;
        }
    }

    const handleSubmit = async(e: any) => {
        e.preventDefault()

        const { error } = await supabase.from("Tasks").insert(newTask).single();
        if(error) {
            console.error("Error adding task:", error.message);
        }
        setNewTask({ title: "", description: ""})
    }
  return (
    <>
      <div style={{maxWidth: "600px", margin: "0 auto", padding: "1rem"}} >
        <h2>What to cook</h2>
        <form onSubmit={handleSubmit} action="" style={{marginBottom: "1rem"}}>
            <input type="text" 
            placeholder='Task Title'
            onChange={(e) => setNewTask((prev) => ({...prev, title: e.target.value }))}
            style={{width: "100%", marginBottom: "0.5rem", padding: "0.5rem"}}
            />
            <textarea name="" id=""
            placeholder="Task Description"
            onChange={(e) => setNewTask((prev) => ({...prev, description: e.target.value}))}
            value={newTask.description}
            style={{width: "100%", marginBottom: "0.5rem", padding: "0.5rem"}}
            />
            <button type='submit' style={{padding: "0.5rem 1rem"}}>
                Add Task
            </button>
        </form>

        <ul style={{listStyle: "none", padding: 0}}>
            {tasks.map((task, key) =>(

            
            <li
            key={key}
            style={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "1rem",
                marginBottom: "0.5rem"
            }}
            >
                <div>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <div>
                        <textarea placeholder="Updated description..." onChange={(e)=>setNewDescription(e.target.value)} />
                        <button style={{padding: "0.5rem 1rem", marginRight: "0.5rem"}} onClick={() => updateTask(task.id)}>
                            Edit
                        </button>
                        <button style={{padding: "0.5rem 1rem"}} onClick={() =>deleteTask(task.id)}>Delete</button>
                    </div>
                </div>
            </li>
            ))}
        </ul>
      </div>
      
    </>
  )
}

export default Supabasetest
