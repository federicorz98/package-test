import { Button, IconButton, useMultiTheme } from "@federicorz98/multi";
import { Box, Stack, Typography } from "@mui/material";
import { Moon, Sun } from "@phosphor-icons/react";

function App() {
  const { toggleThemeMode, isDarkMode } = useMultiTheme();

  return (
    <Stack display="flex" m={4}>
      <Box flex={1} gap={4} mt={4} display="flex">
        <IconButton onClick={toggleThemeMode}>
          {isDarkMode ? (
            <Sun size={18} weight="regular" cursor="pointer" />
          ) : (
            <Moon size={18} weight="regular" cursor="pointer" />
          )}
        </IconButton>
      </Box>

      <Typography mt={4}>Buttons</Typography>
      <Box flex={1} gap={4} mt={2} display="flex">
        <Button label="contained" variant="contained" />
        <Button label="outlined" variant="outlined" />
        <Button label="text" variant="text" />
      </Box>
    </Stack>
  );
}

export default App;
