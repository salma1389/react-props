import propTypes from 'prop-types';
import React from 'react'

const Profile = ({list,children,name}) => {
    const styleobject = { color:"red",fontSize:"50px",fontWeight:"700",marginTop:"20px"}
    return (
        <div style={styleobject}>
           <h1> {list.fullNAme}</h1> 
           <h2>{list.bio}</h2>
           <h3>{list.profession}</h3>
           <img src={children} alt="" />
           <button onClick={()=>name()}>message </button>
        </div>
    )
}

Profile.defaultProps = {
    
    list: {fullNAme:"Hela",
profession:"vaaa"},
    children:"https://www.maroc.campusfrance.org/sites/pays/files/maroc/styles/mobile_bloc_mi_largeur/public/architecte.jpg?itok=GqGtpzcV" 

    // <img src="https://www.maroc.campusfrance.org/sites/pays/files/maroc/styles/mobile_bloc_mi_largeur/public/architecte.jpg?itok=GqGtpzcV" alt="" />
  }

  Profile.propTypes = {
    list: propTypes.string
  };
export default Profile

