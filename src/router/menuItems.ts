export interface menuItem {
  path: string;
  label: string;
  icon: string;
}

export enum Menu {
  home = "home",
  about = "about",
  signup = "signup",
  login = "login",
  declaration = "declaration",
  declarations = "declarations",
  pass = "pass",
  profile = "profile",
  profiles = "profiles",
  passages = "passages",
}

export const menuItems: Map<string, menuItem> = new Map([
  [
    Menu.home,
    {
      path: "/",
      label: "Стартовая",
      icon: "home",
    },
  ],
  [
    Menu.about,
    {
      path: "/about",
      label: "О проекте",
      icon: "about",
    },
  ],
  [
    Menu.signup,
    {
      path: "/signup",
      label: "Регистрация",
      icon: "signup",
    },
  ],
  [
    Menu.login,
    {
      path: "/login",
      label: "Войти",
      icon: "login",
    },
  ],
  [
    Menu.declaration,
    {
      path: "/declaration",
      label: "Заявки",
      icon: "declaration",
    },
  ],
  [
    Menu.pass,
    {
      path: "/pass",
      label: "Пропуски",
      icon: "pass",
    },
  ],
  [
    Menu.profile,
    {
      path: "/profile",
      label: "Профиль",
      icon: "person",
    },
  ],
  [
    Menu.passages,
    {
      path: "/passages",
      label: "Проходы",
      icon: "passages",
    },
  ],
  [
    Menu.declarations,
    {
      path: "/declarations",
      label: "Заявки",
      icon: "declarations",
    },
  ],
  [
    Menu.profiles,
    {
      path: "/profiles",
      label: "Работники",
      icon: "employees",
    },
  ],
]);
