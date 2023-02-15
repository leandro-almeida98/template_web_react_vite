interface ITheme {
  body: string;
  text: string;
  menu: {
    search: {
      color: { default: string; placeholder: string };
      background: string;
    };
    text: {
      colors: {
        default: string;
        hover: string;
        active: string;
      };
    };
    background: { default: string; hover: string };
    icon: {
      size: number;
      color: { default: string; active: string };
    };
    submenu: {
      background: { hover: string };
      text: { default: string; active: string };
      divisor: string;
    };
  };
}

export const lightTheme: ITheme = {
  body: "#FFF",
  text: "rgb(69,74,83)",
  menu: {
    search: {
      color: { default: "rgb(69,74,83)", placeholder: "rgb(69,74,83,0.35)" },
      background: "#eff2f275",
    },
    text: {
      colors: {
        default: "rgb(69,74,83)",
        hover: "rgb(39,96,191)",
        active: "#646cff",
      },
    },
    background: { default: "#FFF", hover: "rgb(240,245,255)" },
    icon: {
      size: 25,
      color: { default: "rgb(201,205,208)", active: "#646cff" },
    },
    submenu: {
      background: { hover: "rgb(240,245,255)" },
      text: { default: "rgb(69,74,83)", active: "rgb(39,96,191)" },
      divisor: "rgb(234,235,239)",
    },
  },
};
export const darkTheme: ITheme = {
  body: "#111825",
  text: "#FAFAFA",
  menu: {
    search: {
      color: { default: "#fff", placeholder: "#fff7" },
      background: "rgb(41,49,60)",
    },
    text: {
      colors: {
        default: "rgb(190,198,205)",
        hover: "#fff",
        active: "#fff",
      },
    },
    background: { default: "#111825", hover: "rgb(40, 47, 59)" },
    icon: {
      size: 25,
      color: { default: "#969ba3", active: "#fff" },
    },
    submenu: {
      background: { hover: "rgb(40, 47, 59, 0.75)" },
      text: { default: "rgb(190,198,205)", active: "#fff" },
      divisor: "rgb(33,40,56)",
    },
  },
};

export const blueTheme: ITheme = {
  body: "rgb(0,53,160)",
  text: "#FAFAFA",
  menu: {
    search: {
      color: { default: "#fff", placeholder: "#fff7" },
      background: "rgb(41,49,60)",
    },
    text: {
      colors: {
        default: "rgb(190,198,205)",
        hover: "#fff",
        active: "#fff",
      },
    },
    background: { default: "rgb(0,53,160)", hover: "rgb(40, 47, 59)" },
    icon: {
      size: 25,
      color: { default: "#969ba3", active: "#fff" },
    },
    submenu: {
      background: { hover: "rgb(40, 47, 59, 0.75)" },
      text: { default: "rgb(190,198,205)", active: "#fff" },
      divisor: "rgb(33,40,56)",
    },
  },
};
