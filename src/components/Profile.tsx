import React, { useEffect, useState } from "react";
import { getMe } from "../services/userService";
import TechProfile from "./TechProfile";

function Profile(user: any) {
  const [me, setMe] = useState<any>({});

  useEffect(() => {
    async function fetchMe() {
      try {
        const { data: me } = await getMe();
        setMe(me);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMe();
  }, []);
  return <TechProfile />;
  // return <div>{user.user.name}</div>;
}

export default Profile;
