import axios from "axios";
import { useSelector } from "react-redux";
const API_URL = "https://apnaorganicstore.in/attendance/public/api/";
let Token;
function funTokenUpdate() {
  Token = localStorage.getItem("token");
}

/*Api to get projects */
export const GetProjectsApi = async (head) => {
  const response = await axios.post(`${API_URL}project/getProjects`, "", head);
  return response.data;
};
/*Function to add project */
export const AddProjectApi = async (data, head) => {
  // console.log(data);
  const response = await axios.post(`${API_URL}project/create`, data, head);
  return response.data;
};
export const DeleteProjectByAdmin = async (id) => {
  Token = localStorage.getItem("token");
  const response = await axios.post(
    `${API_URL}project/delete/${id}`,
    {},

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};
export const UpdateProjectApi = async (data, head) => {
  // console.log(data);
  const response = await axios.put(`${API_URL}project/update`, data, head);
  return response.data;
};
/*Api to get task */
export const GetTaskApi = async (id, head) => {
  // console.log(id);
  const response = await axios.post(
    `${API_URL}task/getTasks`,

    {
      project_id: id,
    },
    head
  );
  return response.data;
};
/*Function to add Task */
export const AddTaskApi = async (data) => {
  Token = localStorage.getItem("token");
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
  // console.log(id);
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

/*Api to get attendance of user  */
export const GeUserAttendance = async (id) => {
  // console.log(id);
  const response = await axios.post(
    `${API_URL}attendance`,
    { user_id: id },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};
/*Function to set or change attendece of user */
export const ChangAttendanceStatus = async (id, date, status) => {
  const response = await axios.post(
    `${API_URL}admin/change/status`,
    {
      user_id: id,
      date: date,
      mark_as_a: status,
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
export const GetUserDetailsApi = async () => {
  Token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  });
  return response.data;
};

export const GetAllUserList = async () => {
  Token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}admin/users/list`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  });
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

export const GetLeaveListByAdmin = async (head) => {
  var Token = localStorage.getItem("token");
  const response = await axios.get(
    `${API_URL}admin/leaves`,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};

export const LeaveStatusUpdateByAdmin = async (id, status) => {
  const response = await axios.post(
    `${API_URL}admin/leaves/update/${id}?status=${status}`,
    {},

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};

export const GetHolidayListByAdmin = async () => {
  var Token = localStorage.getItem("token");
  // // console.log("yrtgfhgfghfghfghfghfyh");
  // // console.log(Token);
  const response = await axios.get(
    `${API_URL}admin/holiday`,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};

export const CreateEventByAdmin = async (props) => {
  const formData = new FormData();
  formData.append("start_date", props.start_date);
  formData.append("end_date", props.end_date);
  formData.append("event", props.event);
  formData.append("event_type", props.event_type);

  const response = await axios.post(
    `${API_URL}admin/holiday/store`,
    formData,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};

export const UpdateEventByAdmin = async (props) => {
  const formData = new FormData();
  formData.append("start_date", props.start_date);
  formData.append("end_date", props.end_date);
  formData.append("event", props.event);
  formData.append("event_type", props.event_type);

  const response = await axios.post(
    `${API_URL}admin/holiday/update/${props.id}`,
    formData,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};

export const DeleteEventByAdmin = async (id) => {
  const response = await axios.delete(
    `${API_URL}admin/holiday/destroy/${id}`,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};

export const CreateUserByAdmin = async (props) => {
  const formData = new FormData();
  formData.append("name", props.name);
  formData.append("email", props.email);
  formData.append("phone", props.phone);
  formData.append("gender", props.gender);

  formData.append("institution_id", props.institution_id);
  formData.append("password", props.password);
  formData.append("date_of_birth", props.date_of_birth);

  const response = await axios.post(
    `${API_URL}user/create`,
    formData,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};

export const UpdateUserByAdmin = async (props) => {
  const response = await axios.put(
    `${API_URL}user/updateUser`,
    props,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};

export const DeleteUserByAdmin = async (id) => {
  const formData = new FormData();
  formData.append("id", id);
  const response = await axios.post(`${API_URL}admin/deleteUser`, formData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  });
  return response.data;
};

export const UserStatusUpdateByAdmin = async (id, status) => {
  const response = await axios.put(
    `${API_URL}admin/approve/user?id=${id}&approve=${status}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};

export const SignUpUser = async (props) => {
  const formData = new FormData();
  formData.append("name", props.name);
  formData.append("email", props.email);
  formData.append("phone", props.phone);
  formData.append("gender", props.gender);

  formData.append("institution_id", props.institution_id);
  formData.append("password", props.password);
  formData.append("date_of_birth", props.date_of_birth);

  const response = await axios.post(`${API_URL}auth/signup`, formData);
  return response.data;
};

export const RestoreUserAccount = async (email, phone, statusValue) => {
  const response = await axios.post(
    `${API_URL}auth/restore`,
    {
      email: email,
      phone: phone,
      type: statusValue,
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

export const getAttendanceHistoryUser = async () => {
  Token = localStorage.getItem("token");
  const response = await axios.post(
    `${API_URL}attendance`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};

export const getAttendanceStatus = async () => {
  Token = localStorage.getItem("token");
  const response = await axios.post(
    `${API_URL}attendance/check/attempt`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};

export const punchIDUserFuntion = async () => {
  const response = await axios.post(
    `${API_URL}attendance/punch/in`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};

export const punchOutUserFuntion = async (id) => {
  const response = await axios.post(
    `${API_URL}attendance/punch/out/${id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};

export const GetLeaveByUser = async () => {
  const response = await axios.get(
    `${API_URL}leave`,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};

export const SubmitLeaveByUser = async (state) => {
  const response = await axios.post(
    `${API_URL}leave/add`,
    state,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};

export const GetAttandanceByMonthByAdmin = async (Month) => {
  var Token = localStorage.getItem("token");

  const response = await axios.get(
    `${API_URL}admin/attendance/month/${Month}`,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  return response.data;
};
