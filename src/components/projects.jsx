import { useState } from "react";
import { v4 } from "uuid";
import Proj_Modal from "./proj_modal";

const Projects = ({
  projects,
  createProject,
  deleteProj,
  updateproject,
  setActiveProject,
}) => {
  const [title, setTitle] = useState("");

  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);

  const handleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = { name: title, id: v4() };
    // console.log(project);
    createProject(project);
    setTitle("");
  };

  return (
    <div>
      <div>projects</div>

      {/* each project 'card' */}
      {projects.map((proj, index) => (
        <div key={proj.id}>
          {index + 1}. {proj.name} | {proj.id}
          <span>
            <button onClick={() => setActiveProject(proj.id)}>
              set active
            </button>
            <button onClick={() => setOpen(true)}>edit</button>
            {open ? (
              <Proj_Modal
                proj={proj}
                closeModal={closeModal}
                updateproject={updateproject}
              />
            ) : null}
            <button onClick={() => deleteProj(proj.id)}>x</button>
          </span>
        </div>
      ))}

      {/* submit new project */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="projName"
          id="projName"
          value={title}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Projects;
