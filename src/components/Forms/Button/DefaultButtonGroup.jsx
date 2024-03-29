import React from "react";

import { Box, Button, ButtonGroup } from "@material-ui/core";

import BaseCard from "../../BaseCard/BaseCard.jsx";

const DefaultButtonGroup = () => {
  return (
    <BaseCard title="Default Button Group" chiptitle="Button Group">
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            mb: 2,
          }}
        >
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>
        <Box
          sx={{
            mb: 2,
          }}
        >
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </BaseCard>
  );
};

export { DefaultButtonGroup };
