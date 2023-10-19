import axios from "axios";
import moment from "moment/moment";
const API_URL = "https://apnaorganicstore.in/attendance/public/api/";
let Token = localStorage.getItem("token");

/*Api to get projects */
export const GetProjectsApi = async () => {
  const response = await axios.post(`${API_URL}project/getProjects`, "", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  });
  return response.data;
};
/*Function to add project */
export const AddProjectApi = async (data) => {
  console.log(data);
  const response = await axios.post(`${API_URL}project/create`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  });
  return response.data;
};
/*Api to get task */
export const GetTaskApi = async (id) => {
  console.log(id);
  const response = await axios.post(
    `${API_URL}task/getTasks`,

    {
      project_id: id,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};
/*Function to add Task */
export const AddTaskApi = async (data) => {
  console.log(data);
  const response = await axios.post(`${API_URL}task/create`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  });
  return response.data;
};
/*Function to Update Task */
export const UpdateTaskApi = async (data) => {
  console.log(data);
  const response = await axios.put(`${API_URL}task/update`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  });
  return response.data;
};
/*Function to Update Task */
export const DeleteTaskApi = async (id) => {
  console.log(id);
  const response = await axios.post(
    `${API_URL}task/delete/${id}`,
    { id: id },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};

export const GetUserListApi = async () => {
  const response = await axios.get(`${API_URL}user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  });
  return response.data;
};

export const GetAllUserList = async ({ date }) => {
  const response = await axios.post(
    `${API_URL}admin/users`,
    { date: moment.(date).format("YYYY-MM-DD") },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};

export const userLogin = async (phone, password) => {
  const response = await axios.post(`${API_URL}auth/login`, {
    phone: phone,
    password: password,
  });
  return response.data;
};

export const UpdateUserApi = async (data) => {
  delete data["institution_id"];
  delete data["role"];
  delete data["image"];
  delete data["email_verified_at"];
  delete data["email_verified_at"];
  delete data["is_active"];
  delete data["approved"];
  delete data["created_by"];
  delete data["updated_by"];
  delete data["deleted_at"];
  delete data["created_at"];
  delete data["deleted_at"];
  delete data["updated_at"];

  console.log(data);
  const response = await axios.put(`${API_URL}admin/users/update`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  });
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.post(`${API_URL}user/deleteUser`, {
    id: id,
  });
  return response.data;
};
