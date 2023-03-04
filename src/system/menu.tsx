import { IconProps } from "@iconify/react";

export const MENU: IMenu[] = [
  {
    key: 1,
    title: "Home",
    iconProps: { icon: "mdi:home" },
    href: "/",
    path: "/home",
    element: <div>Home</div>,
    isPrivate: true,
    isAuthenticated: true,
    permissions: ["Admin"],
  },
  {
    key: 2,
    title: "Dashboard",
    iconProps: { icon: "carbon:dashboard" },
    href: "/dashboard",
    path: "/dashboard",
    element: <div>DASHBOARD</div>,
    isPrivate: true,
    permissions: ["Admin"],
    isAuthenticated: true,
  },
  {
    key: 3,
    title: "Projetos",
    iconProps: { icon: "ph:projector-screen-chart-light" },
    href: "",
    path: "/projetos",
    isAuthenticated: true,
    element: <div>projetos</div>,
    subMenu: [
      {
        key: 31,
        title: "FazFreestyle",
        href: "/projetos/fazfreestyle",
        path: "/projetos/fazfreestyle",
        element: <div>PRJ FazFreestyle</div>,
        isPrivate: true,
        isAuthenticated: true,
        permissions: ["Admin"],
      },
      {
        key: 32,
        title: "Barbearia",
        href: "/projetos/barbearia",
        path: "/projetos/barbearia",
        element: <div>PRJ Barbearias</div>,
        isPrivate: true,
        isAuthenticated: true,
        permissions: ["Admin"],
      },
    ],
  },
  {
    key: 4,
    title: "Tarefas",
    iconProps: { icon: "ep:tickets" },
    href: "/Tarefas",
    path: "/Tarefas",
    element: <div>Tarefas</div>,
    isPrivate: true,
    isAuthenticated: true,
    permissions: ["Admin"],
  },
  {
    key: 5,
    title: "Messages",
    iconProps: { icon: "jam:messages-f" },
    href: "/messages",
    path: "/messages",
    element: <div>Mensagens</div>,
    isAuthenticated: true,
    isPrivate: true,
    permissions: ["Admin"],
  },
];

export const MENUS_CONFIGS: IMenu[] = [
  {
    key: 6,
    title: "Configurações",
    iconProps: { icon: "icon-park-outline:setting-config" },
    href: "/configuracoes",
    path: "/configuracoes",
    element: <div>CONFIGURACOES</div>,
    isPrivate: true,
    isAuthenticated: true,
    permissions: ["Admin"],
  },
  {
    key: 7,
    title: "Ajuda",
    iconProps: { icon: "material-symbols:help" },
    href: "/ajuda",
    path: "/ajuda",
    element: <div>AJUDA</div>,
    isPrivate: true,
    isAuthenticated: true,
    permissions: ["Admin"],
  },
];
export const ROUTES: IRoute[] = [
  {
    key: 8,
    title: "Login",
    path: "/login",
    element: <div>CONFIGURACOES</div>,
    isPrivate: false,
    isAuthenticated: false,
    permissions: ["all"],
  },
];
export default [...MENU, ...MENUS_CONFIGS];

export interface IMenu {
  key: number;
  title: string;
  iconProps: IconProps;
  href?: string;
  path: string;
  element?: any;
  subMenu?: ISubMenu[];
  isPrivate?: boolean;
  isAuthenticated?: boolean;
  permissions?: string[];
}
export interface IRoute {
  key: number;
  title: string;
  path: string;
  element?: any;
  isPrivate: boolean;
  isAuthenticated: boolean;
  permissions?: string[];
}
interface ISubMenu {
  key: number;
  title: string;
  href: string;
  path: string;
  element: any;
  isPrivate: boolean;
  isAuthenticated: boolean;
  permissions?: string[];
}
