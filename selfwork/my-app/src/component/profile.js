import React from "react";

function ProfileCard(props) {
  const { name, designation, jobDescription, image } = props;

  const handleSeeMoreClick = () => {
    alert(name);
  };

  return (
    <div className="profile-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{designation}</h3>
      <p>{jobDescription}</p>
      <button onClick={handleSeeMoreClick}>See More</button>
    </div>
  );
}

export default ProfileCard