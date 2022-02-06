import React, { useEffect, useState } from "react";
import { getMe } from "../services/userService";

function Profile(user: any) {
  const [me, setMe] = useState({});

  useEffect(() => {
    async function fetchMe() {
      const { data: me } = await getMe();
      setMe(me);
    }
    console.log(user);
    fetchMe();
  }, []);
  return <div>hej</div>;
  // return <div>{user.user.name}</div>;
}

export default Profile;
