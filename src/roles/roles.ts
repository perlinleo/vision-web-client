import { routes } from "@/router";
import { User } from "@/models/user";
import { menuItem, menuItems, Menu } from "@/router/menuItems";

export enum Roles {
  NewUser = 0,
  Employee = 1,
  ProEmployee = 2,
  Guard = 3,
  Admin = 4,
}

export const RoleNamesArray = [
  "Сотрудник",
  "Уполномоченный сотрудник",
  "Сотрудник службы безопасности",
  "Администратор",
];

export const RoleIconArray = ["person", "proemployee", "guard", "admin"];

export const userMenus: Map<number, Array<menuItem | undefined>> = new Map([
  [
    Roles.NewUser,
    [
      menuItems.get(Menu.about),
      menuItems.get(Menu.signup),
      menuItems.get(Menu.login),
    ],
  ],
  [
    Roles.Employee,
    [
      menuItems.get(Menu.pass),
      menuItems.get(Menu.declaration),
      menuItems.get(Menu.profile),
    ],
  ],
  [
    Roles.ProEmployee,
    [
      menuItems.get(Menu.pass),
      menuItems.get(Menu.declaration),
      menuItems.get(Menu.profile),
    ],
  ],
  [
    Roles.Guard,
    [
      menuItems.get(Menu.passages),
      menuItems.get(Menu.profiles),
      menuItems.get(Menu.declarations),
      menuItems.get(Menu.profile),
    ],
  ],
  [
    Roles.Admin,
    [
      menuItems.get(Menu.passages),
      menuItems.get(Menu.profiles),
      menuItems.get(Menu.declarations),
      menuItems.get(Menu.profile),
    ],
  ],
]);

export const startPageMap: Map<number, string> = new Map([
  [0, "/signup"],
  [1, "/passes"],
  [2, "/passes"],
  [3, "/passages"],
  [4, "/passages"],
]);

export const roleNamesMap: Map<number, string> = new Map([
  [0, "Новый сотрудник"],
  [1, "Сотрудник"],
  [2, "Уполномоченное лицо"],
  [3, "Сотрудник службы безопасности"],
  [4, "Администратор"],
]);

type GetUserDataFunction = (a: User) => string;

export const getUserRoleName: GetUserDataFunction = (user: User) => {
  const name = roleNamesMap.get(user.userRoleID);
  if (!name) {
    return "Неизвестный сотрудник";
  }
  return name;
};

export const getUserStartPage: GetUserDataFunction = (user: User) => {
  const path = startPageMap.get(user.userRoleID);
  if (!path) {
    return "/";
  }
  return path;
};

export const getUserMenu = (user: User) => {
  const menu = userMenus.get(user.userRoleID);
  console.log(user);
  if (!menu) {
    return [];
  }
  return menu;
};
