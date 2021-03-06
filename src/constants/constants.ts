export const NAV_ROUTES = [
  { name: "developers", path: "/developers" },
  { name: "projects", path: "/projects" },
  { name: "meetups", path: "/meetups" },
  { name: "blogs", path: "/blogs" },
  { name: "hiring", path: "/hiring" },
];

export const MAIN_ROUTES = {
  landing: "/",
  login: "/login",
  register: "/register",
  home: "/home",
  admin: "/admin",
  account: "/account",
  "password-forget": "/password-forget",
};

export const COLORS = {
  black: "#222",
  white: "#fafafa",
  whiteAlpha: "rgba(240, 240, 255,0.85)",
  gray: "#9e9e9e",
  grayDark: "#424242",
  grayLight: "#E0E0E0",
  grayTextDark: "rgba(66,66,66,0.9)",
  grayText: "rgba(120,120,120,1)",
  grayTextMed: "rgba(156,156,156,0.8)",
  grayTextLight: "rgba(206,206,206,0.9)",
  primary: "#ffb200",
  primaryMedDark: "#805900",
  primaryDark: "#422E00",
  primaryMedLight: "#BF8600",
  primaryLight: "#E6A100",
  primaryAlpha: "hsla(42, 100%, 50%, 0.8)",
  primaryAlphaLight: "#fbd274",
  secondary: "#1298B3",
  secondaryMedDark: "#0F8299",
  secondaryDark: "#0B6273",
  secondaryMedLight: "#13A3BF",
  secondaryLight: "#19D9FF",
  secondaryLightAlpha: "rgba(25, 217, 255, 0.8)",
  tertiary: "#3612B3",
  tertiaryMedDark: "#2D0F99",
  tertiaryDark: "#220B73",
  tertiaryMedLight: "#3813BF",
  tertiaryLight: "#4B19FF",
  red: "rgb(205, 92, 92)",
};

export const BREAKPOINTS_SIZE = {
  xs: 460,
  sm: 640,
  md: 768,
  mdMax: 920,
  lg: 1024,
  xl: 1440,
  xxl: 2560,
};

export const BREAKPOINTS = {
  xs: "(min-width: " + BREAKPOINTS_SIZE.xs + "px)",
  sm: "(min-width: " + BREAKPOINTS_SIZE.sm + "px)",
  md: "(min-width: " + BREAKPOINTS_SIZE.md + "px)",
  mdMax: "(min-width: " + BREAKPOINTS_SIZE.mdMax + "px)",
  lg: "(min-width: " + BREAKPOINTS_SIZE.lg + "px)",
  xl: "(min-width: " + BREAKPOINTS_SIZE.xl + "px)",
  xxl: "(min-width: " + BREAKPOINTS_SIZE.xxl + "px)",
};

export const FONT_SIZES = {
  sm: "1.2rem",
  mdMin: "1.4rem",
  md: "1.6rem",
  mdMax: "1.8rem",
  lg: "2rem",
  xl: "2.4rem",
  xxl: "3.2rem",
};

export const FONTS = {
  serif: "'Alegreya', serif",
  sansSerif: "'Roboto Condensed', sans-serif",
};

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
