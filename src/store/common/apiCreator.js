import { actionCreator } from "../common";
import axios from "axios";
export const serverURL = process.env.REACT_APP_API_URL;
// export const serverURL = "http://localhost:4000";
export const cloudinaryUrl = process.env.REACT_APP_CLOUDINARY_URL;
export const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET;

const optionsCretor = (props) => {
  return {
    method: props.method,
    url: `${serverURL}${props.endPoint}`,
    data: props.body || {},
  };
};

export const apiCreator = async (props, type, dispatch, state) => {
  return new Promise((resolve, reject) => {
    axios(optionsCretor(props))
      .then((response) => {
        const { result } = response.data;
        if (type) {
          dispatch(actionCreator(type, { result: result, state: state }));
        }
        resolve(result);
      })
      .catch((error) => reject(error));
  });
};
