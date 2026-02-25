import axios from "axios";

// Create Axios instance
export const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // FastAPI URL
});

// ---------------------- PEOPLE ----------------------
//nddufwuefgewfgwegbf
// Fetch all people
const getPeople = async () => {
  try {
    const response = await api.get("/people/");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching people:", error);
    return [];
  }
};

// Create a new person
const createPerson = async (name, age) => {
  try {
    const response = await api.post("/people/", { name, age });
    return response.data;
  } catch (error) {
    console.error("Error creating person:", error);
    return null;
  }
};

// Update a person
const updatePerson = async (id, name, age) => {
  try {
    const response = await api.put(`/people/${id}`, { name, age });
    return response.data;
  } catch (error) {
    console.error("Error updating person:", error);
    return null;
  }
};

// Delete a person
const deletePerson = async (id) => {
  try {
    const response = await api.delete(`/people/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting person:", error);
    return null;
  }
};

// ---------------------- THINGS ----------------------

// Fetch all things
const getThings = async () => {
  try {
    const response = await api.get("/things/");
    return response.data;
  } catch (error) {
    console.error("Error fetching things:", error);
    return [];
  }
};

// Create a new thing for a person
const createThing = async (description, price, owner_id) => {
  try {
    const response = await api.post("/things/", {
      description,
      price,
      owner_id,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating thing:", error);
    return null;
  }
};

// Update a thing
const updateThing = async (id, description, price) => {
  try {
    const response = await api.put(`/things/${id}`, { description, price });
    return response.data;
  } catch (error) {
    console.error("Error updating thing:", error);
    return null;
  }
};

// Delete a thing
const deleteThing = async (id) => {
  try {
    const response = await api.delete(`/things/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting thing:", error);
    return null;
  }
};

// Fetch all things for a specific person
export const getThingsByPerson = async (owner_id) => {
  try {
    const response = await api.get(`/people/${owner_id}/things`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching things for person ${owner_id}:`, error);
    return [];
  }
};

export {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
  getThings,
  createThing,
  updateThing,
  deleteThing,
};
