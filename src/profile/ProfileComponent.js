import React from "react";
import PropTypes from "prop-types";

const ProfileComponent = (props) => {
  return (
    <div>
      {props.nameAlert()}
      <h1 style={{ fontFamily:"Arial, Helvetica, sans-serif", 
    color:"red",
    paddingLeft:"10px" 
     }}>
        {props.fullName}
      </h1>
      <p
        style={{
          fontFamily: "Arial,sans-serif",
          fontSize: "20px",
          color: "blue", 
          paddingLeft:"25px"
        }}
      >
        {props.bio}
      </p>
      <h3
        style={{
          fontFamily: "'Times New Roman', Times, serif",
          fontSize: "20px", 
          paddingLeft:"25px"
        }}
      >
        {props.profession}
      </h3>
      {props.children}
    </div>
  );
};
ProfileComponent.defaultProps = {
  bio: "No Biography",
  profession: "No Profession"
};

ProfileComponent.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  nameAlert: PropTypes.func.isRequired
};
export default ProfileComponent;