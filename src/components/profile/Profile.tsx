import React, { useEffect, useState } from "react";
import auth from "../../services/authService";
import TechProfile from "./TechProfile";
import PlannerProfile from "./PlannerProfile";
import EditTechProfile from "./EditTechProfile";

function Profile(user: any) {
  const [me, setMe] = useState<any>({});
  const [isEdit, setEdit] = useState<any>(false);

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

  const toggleEdit = () => {
    const toggle = !isEdit;
    setEdit(toggle);
  };

  return (
    <div>
      {me.userType === "Technician" && isEdit && (
        <EditTechProfile technician={me} onSaveClick={toggleEdit} />
      )}
      {me.userType === "Technician" && !isEdit && (
        <TechProfile technician={me} onEditClick={toggleEdit} />
      )}
      {me.userType === "Planner" && <PlannerProfile planner={me} />}
    </div>
  );
}

export default Profile;
