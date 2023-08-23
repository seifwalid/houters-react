import api from "./index";

export const getProperties = async () => {
  return await api.get("/properties");
};

export const getProperty = async (id: number) => {
  return await api.get(`/properties/${id}`);
};

export const createProperty = async (id: number, body: any) => {
  return await api.put(`/properties/${id}`, body);
};

export const updateProperty = async (id: number, body: any) => {
  return await api.put(`/properties/${id}`, body);
};

export const delProperty = async (id: number) => {
  return await api.del(`/properties/${id}`);
};
