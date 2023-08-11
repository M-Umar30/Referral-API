import React, {useState} from "react";
import "./../style.css";
import { Divider } from "@mui/material";
import LikeControlButton from "./LikeControlButton";
import EditReferralButtons from "./EditReferralButtons";

function ReferralCard(props) {
  const referrals = props.referrals;
  const likeControl = props.likeControl;
  console.log(referrals);
  const [editable, setEditable] = useState(false);
  const handleEditClick = () => {
    setEditable(true);
  };
  return (
    <div className="referral-card">
      {editable ? (
        <div>
          <input type="text" defaultValue={referrals.title} />
          <Divider
            orientation="vertical"
            flexItem={true}
            light={true}
            variant="middle"
          />
          <input type="text" defaultValue={referrals.description} />
        </div>
      ) : (
        referrals.map((referral) => (
          <div className="referral-preview" key={referrals.id}>
            <h3>{referral.title}</h3>
            <Divider
              orientation="vertical"
              flexItem="true"
              light="true"
              variant="middle"
            />
            <p>{referral.description}</p>
            {likeControl ? <LikeControlButton /> : <EditReferralButtons onEditClick={handleEditClick}/>}
          </div>
        ))
      )}
    </div>
  );
}

export default ReferralCard;
