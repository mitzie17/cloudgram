// This file imports all of appwrite's functionalities (Client, Account, Databases, Storage, Avatars)
import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
};
