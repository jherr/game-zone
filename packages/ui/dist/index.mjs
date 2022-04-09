// useAppShell.ts
import create from "zustand";
import { persist } from "zustand/middleware";
var useAppShell = create(persist((set) => ({
  user: null,
  score: 0,
  setUser: (user) => set(() => ({ user })),
  addToScore: (amount) => set((state) => ({ score: state.score + amount }))
}), {
  name: "app-shell"
}));

// Shell.tsx
import React from "react";
import {
  AppShell,
  Header,
  Title,
  Box,
  Button,
  useMantineTheme
} from "@mantine/core";
var Shell = ({ title, children }) => {
  const { user, score, setUser } = useAppShell();
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(AppShell, {
    padding: "md",
    styles: {
      main: {
        background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
      }
    },
    header: /* @__PURE__ */ React.createElement(Header, {
      height: 60,
      p: "xs",
      style: {
        display: "flex",
        background: theme.colors.blue[8]
      }
    }, /* @__PURE__ */ React.createElement(Title, {
      style: {
        color: "white"
      }
    }, title), /* @__PURE__ */ React.createElement(Box, {
      sx: { flexGrow: 1 }
    }), user && /* @__PURE__ */ React.createElement(Box, {
      sx: { display: "flex" }
    }, /* @__PURE__ */ React.createElement(Title, {
      mr: "md",
      style: {
        color: "white"
      }
    }, user, " - ", score), /* @__PURE__ */ React.createElement(Button, {
      variant: "light",
      onClick: () => setUser(null)
    }, "Logout")), !user && /* @__PURE__ */ React.createElement(Button, {
      variant: "light",
      onClick: () => setUser("Jack")
    }, "Login"))
  }, children);
};
export {
  Shell,
  useAppShell
};
