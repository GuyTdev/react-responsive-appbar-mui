import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import AllMembers from "./AllMembers";
import AddMember from "./AddMember";
import { useNavigate, useParams, useResolvedPath } from "react-router-dom";
import EditMember from "./EditMember";

const Members = () => {
  const route= useResolvedPath()
  const {id} = useParams()
  console.log("route", route);
  const pages = [
    { componentName: AllMembers, viewName: "All Members", routeName: "" },
    { componentName: AddMember, viewName: "Add Member", routeName: "addmember"}
  ];
  const [value, setValue] = useState(route.pathname ==='/members/addmember'?pages[1].viewName:pages[0].viewName);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    console.log(event.target.name);
    setValue(newValue);
    navigate(`${event.target.name}`)
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      {!id?
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            centered
            aria-label="lab API tabs example"
          >
            {pages?.map((page) => (
              <Tab
                key={page.componentName}
                label={page.viewName}
                name = {page.routeName}
                value={page.viewName}
              />
            ))}
          </TabList>
        </Box>
        {pages?.map((page) => (
          <TabPanel key={page.componentName} value={page.viewName}>
            <page.componentName />
          </TabPanel>
        ))}
      </TabContext>
      :<EditMember/>}
    </Box>
  );
};
export default Members;
