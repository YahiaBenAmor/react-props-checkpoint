import React from 'react';
import myImage from "./image.jpg";
import ProfileComponent from "./profile/ProfileComponent"


const name = "Yahia Ben Amor";
function App() {
  const handleName =  () => {
    alert(`${name}`)
  } ;
  return ( 
    <div> 
      <ProfileComponent 
      nameAlert={handleName}
      fullName={name}
      bio="My biography: My name is Yahia Ben Amor and I was born in 12 january 1992,I studied electronic for 3 years....." 
      profession="My Profession: Electrotechnicien" 
      >
 <div>
        <img src={myImage} alt="profile-photo" width="350px" height="350px"/>
      </div>
    </ProfileComponent>
    </div>
  );
}

export default App; 
