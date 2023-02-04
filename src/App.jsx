import { useState } from "react";
import "./App.css";
import Projects from "./components/projects";
import Tasks from "./components/tasks";

function App() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [activeProject, setActiveProject] = useState("");

  const deleteProj = (id) =>
    setProjects((prevState) => prevState.filter((proj) => proj.id !== id));

  const createProject = (proj) =>
    setProjects((prevState) => [...prevState, proj]);

  const updateproject = (id, newName) => {
    console.log(id, newName);

    setProjects(
      projects.map((proj) =>
        proj.id === id ? { ...proj, name: newName } : proj
      )
    );
  };

  const createTask = (task) => {
    console.log(task);
    setTasks((prevState) => [...prevState, task]);
  };

  return (
    <div className="App">
      <div>active project: {activeProject ? activeProject : "none"}</div>
      <button onClick={() => setActiveProject("")}>
        remove active project
      </button>
      <div>
        <Projects
          projects={projects}
          createProject={createProject}
          deleteProj={deleteProj}
          updateproject={updateproject}
          setActiveProject={setActiveProject}
        />
      </div>
      <div>
        <Tasks
          tasks={tasks}
          activeProject={activeProject}
          createTask={createTask}
          projects={projects}
        />
      </div>
    </div>
  );
}

export default App;
