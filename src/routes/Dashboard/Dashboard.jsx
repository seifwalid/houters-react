import { FC } from "react";
import { Link } from "react-router-dom";

const Dashboard: FC = () => {
  return (
    <>
      <Link to={"/"}>&lt; Back</Link>
    </>
  );
};

export default Dashboard;
