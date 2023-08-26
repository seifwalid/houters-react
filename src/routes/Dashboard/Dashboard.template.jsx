import { FC } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.styles.css";
import { Dialog } from "primereact/dialog";
import PropertyForm from "../../components/PropertyForm/PropertyForm";
import { deletePropertyImage } from "../../utils/firebase/storage";

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
  createDialogVisible,
  toggleCreateDialog,
  editDialogVisible,
  editingProperty,
  toggleEditDialog,
  refreshPropertyList,
  deleteProperty,
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
        <button
          className="btn btn-primary mt-3 mb-3"
          onClick={toggleCreateDialog}
        >
          Add Property +
        </button>

        <Dialog
          header={"Add Property"}
          visible={createDialogVisible}
          onHide={toggleCreateDialog}
        >
          <PropertyForm
            refreshPropertyList={refreshPropertyList}
            closeDialog={toggleCreateDialog}
          />
        </Dialog>

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
                  <tr key={property.id}>
                    <th scope={"row"}>{property.id}</th>
                    <td>{property.name}</td>
                    <td>{property.type}</td>
                    <td>{property.propertyImage.fullPath}</td>
                    <td>{property.ownerName}</td>
                    <td>{property.ownerImage}</td>
                    <td>{property.location}</td>
                    <td>{property.category}</td>
                    <td>{property.price}</td>
                    <td>
                      <button className={"btn btn-danger"}>
                        <i
                          className={""}
                          onClick={() => {
                            deleteProperty(property.id);
                            deletePropertyImage(
                              property.propertyImage.fullPath
                            ).then(() => {
                              console.log(
                                `deleted ${property.propertyImage.fullPath}`
                              );
                            });
                          }}
                        >
                          del
                        </i>
                      </button>
                    </td>
                    <td>
                      <button className={"btn btn-light"}>
                        <i
                          className={""}
                          onClick={() => {
                            toggleEditDialog(property);
                          }}
                        >
                          edit
                        </i>
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
        <Dialog
          header={"Add Property"}
          visible={editDialogVisible}
          onHide={toggleEditDialog}
        >
          <PropertyForm
            initialProperty={editingProperty}
            refreshPropertyList={refreshPropertyList}
            closeDialog={toggleEditDialog}
          />
        </Dialog>
      </div>
    </>
  );
};

export default DashboardTemplate;
