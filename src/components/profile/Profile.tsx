import React, { useEffect, useState } from "react";
import auth from "../../services/authService";
import TechProfile from "./TechProfile";
import PlannerProfile from "./TechProfile";

function Profile(user: any) {
  const [me, setMe] = useState<any>({});

  useEffect(() => {
    async function fetchMe() {
      try {
        const { data: me } = await auth.getMe();
        setMe(me);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMe();
  }, []);

  //Ska ändras
  if (me.userType === "Technician") {
    return <TechProfile technician={me} />;
  } else if (me.userType === "Planner") {
    return <PlannerProfile planner={me} />;
  } else {
    return <div></div>;
  }
}

export default Profile;
