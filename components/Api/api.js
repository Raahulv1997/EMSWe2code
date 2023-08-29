import axios from "axios";
const API_URL = "https://apnaorganicstore.in/attendance/public/api/";
let Token =
  "71|xQdefyD21IVd0sr8L9B3ZmXPMuE0WEmTDYc0Wkdh"; /*localStorage.getItem("token");*/

/*Api to get projects */
export const GetProjectsApi = async () => {
  const response = await axios.post(`${API_URL}project/getProjects`, "",{
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
        },
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
export const DeleteTaskApi = async (data) => {
  console.log(id);
  const response = await axios.put(
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
