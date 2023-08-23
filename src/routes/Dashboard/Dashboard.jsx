import { FC, useEffect, useState } from "react";
import DashboardTemplate from "./Dashboard.template";
import { getProperties } from "../../api/properties";

const Dashboard: FC = () => {
  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    getProperties().then(({ data }) => {
      console.log(propertyList);
      console.log("data: ", data);
      setPropertyList([...data]);
    });
  }, []);

  return <DashboardTemplate propertyList={propertyList} />;
};

export default Dashboard;
