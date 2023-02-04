import { useState, useEffect } from "react";
import { v4 } from "uuid";
import "../styles/tasks.css";

const Tasks = ({ tasks, activeProject, createTask, projects }) => {
  const [task, setTask] = useState({
    name: "",
    desc: "",
    prio: "",
    project: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const completeTask = { ...task, id: v4() };
    createTask(completeTask);
  };

  const handleChange = (e) =>
    setTask((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

  const setProject = (projId) => {
    setTask({ ...task, project: projId });
  };

  useEffect(() => {
    console.log(task);
  }, [task]);

  return (
    <div>
      <div>tasks</div>

      {/* display tasks */}
      {activeProject ? (
        <Filtered_Tasks tasks={tasks} activeProject={activeProject} />
      ) : (
        <All_Tasks tasks={tasks} />
      )}

      {/* submit new task */}
      <form onSubmit={handleSubmit} className="task_form">
        <div>create task</div>
        <label htmlFor="name">task name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={task.name}
          onChange={handleChange}
        />
        <label htmlFor="desc">task description</label>
        <input
          type="text"
          name="desc"
          id="desc"
          value={task.desc}
          onChange={handleChange}
        />

        {/* radio buttons */}
        <div onChange={handleChange}>
          <label htmlFor="prio">low</label>
          <input type="radio" value="low" name="prio" />
          <label htmlFor="prio">med</label>
          <input type="radio" value="med" name="prio" />
          <label htmlFor="prio">high</label>
          <input type="radio" value="high" name="prio" />
        </div>

        {/* select project */}
        {projects.map((proj) => (
          <button
            className={task.project === proj.id ? "selected" : "not_selected"}
            type="button"
            onClick={() => setProject(proj.id)}
          >
            {proj.name}
          </button>
        ))}

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

const Filtered_Tasks = ({ tasks, activeProject }) => {
  return (
    <div>
      {tasks
        .filter((task) => task.project === activeProject)
        .map((task, index) => (
          <div key={task.id}>
            {index}. {task.name} {task.desc} {task.prio}
          </div>
        ))}
    </div>
  );
};

const All_Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={task.id}>
          {index}. {task.name} {task.desc} {task.prio}
        </div>
      ))}
    </div>
  );
};

export default Tasks;
