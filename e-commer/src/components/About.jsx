// src/components/About.js

import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div>
      <h2>About Page</h2>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
};

export default About;
