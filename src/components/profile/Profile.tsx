import React, { useEffect, useState } from "react";
import auth from "../../services/authService";
import TechProfile from "./TechProfile";
import PlannerProfile from "./PlannerProfile";

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

  return (
    <div>
      {me.userType === "Technician" && <TechProfile technician={me} />}
      {me.userType === "Planner" && <PlannerProfile planner={me} />}
    </div>
  );
}

export default Profile;
