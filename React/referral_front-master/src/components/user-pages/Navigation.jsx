import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import { useHistory } from "react-router-dom";

function Navigation() {
  const history = useHistory();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      history.push("/user/home");
    } else if (newValue === 1) {
      history.push("/user/viewreferrals");
    }
  };

  return (
    <div className="nav-bar">
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="My Referrals" icon={<ListIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default Navigation;
