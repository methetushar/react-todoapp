import './App.css';
import React, {useEffect, useState} from "react";
import Header from "./components/Header";

function App() {
    const  [formData,setFormData] = useState({
        title:'',
        duration:'',
        status:'',
    });
    const [successMsg, setSuccessMsg] = useState(false);
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        tasks.push(formData)
        setFormData({
            title:'',
            duration:'',
            status:'',
        });
        setSuccessMsg(!successMsg);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    return (

        <div className="App">
            <Header/>
            <div className="conatiner">
                <div className="row justify-content-center align-items-center my-5">
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-sm rounded-4 bg-light">
                            <div className="card-header bg-transparent border-0">
                                <h2 className="text-uppercase">Todo app</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-4">
                                        {successMsg && <div className="alert alert-success">A new task added succefully!</div>}
                                        <form onSubmit={handleSubmit}>
                                            <div className="col-12 mb-3">
                                                <label className="w-100">
                                                    Task Title:
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="title"
                                                        value={formData.title}
                                                        onChange={handleChange}
                                                    />
                                                </label>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="w-100">
                                                    Task Duration:
                                                    <input
                                                        className="form-control"
                                                        type="time"
                                                        name="duration"
                                                        value={formData.duration}
                                                        onChange={handleChange}
                                                    />
                                                </label>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="w-100">
                                                    Task Status:
                                                    <select name="status" className="form-select" value={formData.status} onChange={handleChange}>
                                                        <option value="">Select status</option>
                                                        <option value="To Do">To Do</option>
                                                        <option value="In Progress">In Progress</option>
                                                        <option value="Done">Done</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <button className="btn btn-success w-100" type="submit">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-lg-8 border-start">
                                        <ol className="list-group list-group-numbered">
                                        {tasks && tasks.map((task, index) => (
                                            <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">{ task.title}</div>
                                                </div>
                                                <span className="badge bg-primary rounded-pill">{ task.status }</span>
                                            </li>
                                        ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
