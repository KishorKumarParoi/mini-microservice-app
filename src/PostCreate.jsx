import { useState } from "react";
import api from './api/api';

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await api.post("posts", {
      title,
    });

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="me-2">Title :</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control text-blue-600 p-2 bg-white rounded-lg"
            placeholder="Enter Title"
          />
        </div>
        <button className="bg-red-400 rounded-lg px-4 mt-2">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
