import { FC } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.styles.css";

export type Property = {
  id: number,
  name: string,
  type: string,
  category: string,
  location: string,
  propertyImage: string,
  ownerName: string,
  ownerImage: string,
  price: number,
};

const DashboardTemplate: FC = ({
  propertyList,
}: {
  propertyList: Property[],
}) => {
  return (
    <>
      <div>
        <Link
          className={"btn btn-outline-secondary border-2 ms-2 mt-2"}
          to={"/"}
        >
          &lt; Back
        </Link>
      </div>
      <div className="container">
        <table className={"table table-hover"}>
          <thead>
            <tr>
              <th scope={"col"}>id</th>
              <th scope={"col"}>name</th>
              <th scope={"col"}>type</th>
              <th scope={"col"}>propertyImage</th>
              <th scope={"col"}>ownerName</th>
              <th scope={"col"}>ownerImage</th>
              <th scope={"col"}>location</th>
              <th scope={"col"}>category</th>
              <th scope={"col"}>price</th>
            </tr>
          </thead>
          <tbody>
            {propertyList
              ? propertyList.map((property) => (
                  <tr>
                    <th scope={"row"}>{property.id}</th>
                    <td>{property.name}</td>
                    <td>{property.type}</td>
                    <td>{property.propertyImage}</td>
                    <td>{property.ownerName}</td>
                    <td>{property.ownerImage}</td>
                    <td>{property.location}</td>
                    <td>{property.category}</td>
                    <td>{property.price}</td>
                    <td>
                      <button className={"btn btn-secondary"}>
                        <i className={""}></i>
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardTemplate;
