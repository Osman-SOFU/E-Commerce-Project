import axios from "axios";
import { showSuccess, showError, showInfo } from "../../utils/toast";

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const setRoles = (roles) => ({
  type: "SET_ROLES",
  payload: roles,
});

export const setTheme = (theme) => ({
  type: "SET_THEME",
  payload: theme,
});

export const setLanguage = (language) => ({
  type: "SET_LANGUAGE",
  payload: language,
});

export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { client } = getState();
    if (client.roles.length === 0) {
      try {
        const response = await axios.get("/api/roles");
        dispatch(setRoles(response.data));
        showSuccess("Roles fetched successfully!");
      } catch (error) {
        console.error("Failed to fetch roles", error);
        showError("Failed to fetch roles.");
      }
    } else {
      showInfo("Roles are already fetched.");
    }
  };
};
