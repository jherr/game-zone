var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.tsx
var ui_exports = {};
__export(ui_exports, {
  Shell: () => Shell,
  useAppShell: () => useAppShell
});
module.exports = __toCommonJS(ui_exports);

// useAppShell.ts
var import_zustand = __toESM(require("zustand"));
var import_middleware = require("zustand/middleware");
var useAppShell = (0, import_zustand.default)((0, import_middleware.persist)((set) => ({
  user: null,
  score: 0,
  setUser: (user) => set(() => ({ user })),
  addToScore: (amount) => set((state) => ({ score: state.score + amount }))
}), {
  name: "app-shell"
}));

// Shell.tsx
var import_react = __toESM(require("react"));
var import_core = require("@mantine/core");
var Shell = ({ title, children }) => {
  const { user, score, setUser } = useAppShell();
  const theme = (0, import_core.useMantineTheme)();
  return /* @__PURE__ */ import_react.default.createElement(import_core.AppShell, {
    padding: "md",
    styles: {
      main: {
        background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
      }
    },
    header: /* @__PURE__ */ import_react.default.createElement(import_core.Header, {
      height: 60,
      p: "xs",
      style: {
        display: "flex",
        background: theme.colors.blue[8]
      }
    }, /* @__PURE__ */ import_react.default.createElement(import_core.Title, {
      style: {
        color: "white"
      }
    }, title), /* @__PURE__ */ import_react.default.createElement(import_core.Box, {
      sx: { flexGrow: 1 }
    }), user && /* @__PURE__ */ import_react.default.createElement(import_core.Box, {
      sx: { display: "flex" }
    }, /* @__PURE__ */ import_react.default.createElement(import_core.Title, {
      mr: "md",
      style: {
        color: "white"
      }
    }, user, " - ", score), /* @__PURE__ */ import_react.default.createElement(import_core.Button, {
      variant: "light",
      onClick: () => setUser(null)
    }, "Logout")), !user && /* @__PURE__ */ import_react.default.createElement(import_core.Button, {
      variant: "light",
      onClick: () => setUser("Jack")
    }, "Login"))
  }, children);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Shell,
  useAppShell
});
