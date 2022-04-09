import React, { useState } from "react";
import { Box, Paper, Text, Button, Title } from "@mantine/core";
import { shuffle } from "lodash";

import { useAppShell } from "ui";

const OPTIONS = [10, 5, 2, -1, -2];

export const CardPicker = () => {
  const [cards, setCards] = useState<number[]>(shuffle(OPTIONS));
  const [played, setPlayed] = useState<number | null>(null);

  const { addToScore, user } = useAppShell();

  if (!user) {
    return null;
  }

  return (
    <Paper shadow="sm" radius="md" p="md" m="10" withBorder>
      <Title>Card Picker!!!</Title>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridGap: "1rem",
        }}
      >
        {cards.map((card, index) => (
          <Box
            p={5}
            sx={{
              borderRadius: 15,
              height: 200,
              border: "5px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background:
                played !== null
                  ? index === played
                    ? "#ccc"
                    : "white"
                  : "black",
            }}
            key={index}
            onClick={() => {
              addToScore(card);
              setPlayed(index);
            }}
          >
            {played !== null && <Text sx={{ fontSize: "40pt" }}>{card}</Text>}
          </Box>
        ))}
      </Box>
      {played !== null && (
        <Button
          mt="md"
          size="lg"
          fullWidth
          onClick={() => {
            setCards(shuffle(OPTIONS));
            setPlayed(null);
          }}
        >
          Play Again
        </Button>
      )}
    </Paper>
  );
};
