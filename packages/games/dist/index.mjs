// CardPicker.tsx
import React, { useState } from "react";
import { Box, Paper, Text, Button, Title } from "@mantine/core";
import { shuffle } from "lodash";
import { useAppShell } from "ui";
var OPTIONS = [10, 5, 2, -1, -2];
var CardPicker = () => {
  const [cards, setCards] = useState(shuffle(OPTIONS));
  const [played, setPlayed] = useState(null);
  const { addToScore, user } = useAppShell();
  if (!user) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(Paper, {
    shadow: "sm",
    radius: "md",
    p: "md",
    m: "10",
    withBorder: true
  }, /* @__PURE__ */ React.createElement(Title, null, "Card Picker!!!"), /* @__PURE__ */ React.createElement(Box, {
    sx: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gridGap: "1rem"
    }
  }, cards.map((card, index) => /* @__PURE__ */ React.createElement(Box, {
    p: 5,
    sx: {
      borderRadius: 15,
      height: 200,
      border: "5px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: played !== null ? index === played ? "#ccc" : "white" : "black"
    },
    key: index,
    onClick: () => {
      addToScore(card);
      setPlayed(index);
    }
  }, played !== null && /* @__PURE__ */ React.createElement(Text, {
    sx: { fontSize: "40pt" }
  }, card)))), played !== null && /* @__PURE__ */ React.createElement(Button, {
    mt: "md",
    size: "lg",
    fullWidth: true,
    onClick: () => {
      setCards(shuffle(OPTIONS));
      setPlayed(null);
    }
  }, "Play Again"));
};

// TopNumber.tsx
import React2, { useEffect, useState as useState2 } from "react";
import { Paper as Paper2, Button as Button2, Title as Title2 } from "@mantine/core";
import { useAppShell as useAppShell2 } from "ui";
var pickNumber = () => Math.ceil(Math.random() * 10) + 2;
var TopNumber = () => {
  const [topNumber, setTopNumber] = useState2(0);
  const [playing, setPlaying] = useState2(false);
  const [currentValue, setCurrentValue] = useState2(0);
  const { addToScore, user } = useAppShell2();
  useEffect(() => {
    if (playing) {
      const timer = setTimeout(() => {
        if (currentValue < topNumber) {
          setCurrentValue(currentValue + 1);
        } else {
          addToScore(-1);
          setCurrentValue(0);
          setPlaying(false);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [playing, topNumber, currentValue, addToScore]);
  if (!user) {
    return null;
  }
  return /* @__PURE__ */ React2.createElement(Paper2, {
    shadow: "sm",
    radius: "md",
    p: "md",
    m: "10",
    withBorder: true
  }, /* @__PURE__ */ React2.createElement(Title2, null, "Top Number!!!"), playing && /* @__PURE__ */ React2.createElement(Button2, {
    mt: "md",
    variant: "outline",
    color: "violet",
    size: "xl",
    fullWidth: true,
    onClick: () => {
      addToScore(currentValue);
      setCurrentValue(0);
      setPlaying(false);
    }
  }, currentValue, " - Snag It!"), !playing && /* @__PURE__ */ React2.createElement(Button2, {
    mt: "md",
    size: "xl",
    fullWidth: true,
    onClick: () => {
      setPlaying(true);
      setTopNumber(pickNumber());
    }
  }, "Play"));
};
export {
  CardPicker,
  TopNumber
};
