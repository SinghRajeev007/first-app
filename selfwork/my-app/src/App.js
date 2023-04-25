import React from "react";
import ProfileCard from "./component/profile.js";

function App() {
  const users = [
    {
      name: "Raju Shrivastava",
      designation: "Software Engineer",
      jobDescription:
      "He is senior software engineer at amazon his current location is noida",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Sonia Gupta",
      designation: "UX Designer",
      jobDescription:
      "she is UX designer at mirosoft current job location is pune",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Amit Kumar",
      designation: "Project Manager",
      jobDescription:
      "Project manager at google he work on google payment system",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="app">
      {users.map((user, index) => (
        <ProfileCard key={index} {...user} />
      ))}
    </div>
  );
}

export default App;