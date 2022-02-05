import React, { useEffect } from "react";

function Profile(user: any) {
  useEffect(() => {
    console.log(user);
  }, []);
  return <div>{user.user.name}</div>;
}

export default Profile;
