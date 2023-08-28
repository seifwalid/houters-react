import { FC, useEffect, useState } from "react";
import DashboardTemplate from "./Dashboard.template";
import { delProperty, getProperties } from "../../api/properties";

const Dashboard: FC = () => {
  const [propertyList, setPropertyList] = useState([]);

  const [createDialogVisible, setCreateDialogVisible] = useState(false);
  const [editingProperty, setEditingProperty] = useState(undefined);
  const [updateSignal, setUpdateSignal] = useState(false);

  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    getProperties().then(({ data }) => {
      setPropertyList([...data]);
    });
  }, [updateSignal]);

  const refreshPropertyList = () => {
    setUpdateSignal(!updateSignal);
  };

  const toggleCreateDialog = () => {
    setCreateDialogVisible(!createDialogVisible);
    console.log("create dialog is now....", !createDialogVisible);
  };

  const toggleEditDialog = (property) => {
    if (editingProperty === undefined) {
      setEditingProperty(property);
    } else {
      setEditingProperty(undefined);
    }
  };

  const deleteProperty = (id) => {
    delProperty(id).then((response) => {
      if (response.status < 400) {
        refreshPropertyList();
      }
    });
  };

  return (
    <DashboardTemplate
      propertyList={propertyList}
      createDialogVisible={createDialogVisible}
      toggleCreateDialog={toggleCreateDialog}
      toggleEditDialog={toggleEditDialog}
      editingProperty={editingProperty}
      refreshPropertyList={refreshPropertyList}
      deleteProperty={deleteProperty}
      formLoading={formLoading}
      setFormLoading={setFormLoading}
    />
  );
};

export default Dashboard;
