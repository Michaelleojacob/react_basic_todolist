import { useEffect, useState } from "react";
import "../styles/modal.css";

const Proj_Modal = ({ proj, closeModal, updateproject }) => {
  console.log(proj);

  const [name, setname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(proj.id, name);
    updateproject(proj.id, name);
    closeModal();
  };
  useEffect(() => {
    setname(proj.name);
  }, []);

  const handleChange = (e) => setname(e.target.value);

  return (
    <div className="proj_modal">
      <form onSubmit={handleSubmit} className="proj_modal_form">
        <label htmlFor="name">new project name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
      <button onClick={closeModal}>cancel</button>
    </div>
  );
};

export default Proj_Modal;
