import { deleteObject, ref } from "firebase/storage";
import { storage } from "../../firebase";

export const deletePropertyImage = async (fullPath: string) => {
  const imageRef = ref(storage, fullPath);

  console.log("deleting ", imageRef);

  return await deleteObject(imageRef);
};
