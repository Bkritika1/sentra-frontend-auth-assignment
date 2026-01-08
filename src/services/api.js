

const BASE_URL = "https://jsonplaceholder.typicode.com";


const handleResponse = async (res) => {
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `API Error ${res.status}: ${errorText || res.statusText}`
    );
  }
  return res.json();
};

export const fetchUsers = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users`);
    const data = await handleResponse(res);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("fetchUsers failed:", error.message);
    return []; 
  }
};

export const fetchTodos = async () => {
  try {
    const res = await fetch(`${BASE_URL}/todos?_limit=5`);
    const data = await handleResponse(res);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("fetchTodos failed:", error.message);
    return []; 
  }
};
