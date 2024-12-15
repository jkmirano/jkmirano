import { getUser, createUser } from "../clients/userClient";

export const fetchUserProfile = async (userId) => {
  try {
    const response = await getUser(userId);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user profile", error);
    throw error;
  }
};

export const registerUser = async (data) => {
  return await createUser(data);
};
