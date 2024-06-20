export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type roleDesc = Record<UserRole,string>

// Замініть наступний код на версію за допомогою Record
const RoleDescription:roleDesc = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
