"use clients";

import { useState } from "react";

const HeroForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    //e.preventDefault();

    alert(username);
  };
  return (
    <div>
      <form
        className="items-center inline-flex shadow-md mt-5 "
        onSubmit={submitHandler}
      >
        <span className="py-4 bg-white pl-4">linklist.to/</span>
        <input
          type="text"
          className="py-4"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button className="bg-blue-500 text-white p-4">Join for free!</button>
      </form>
    </div>
  );
};
export default HeroForm;
