"use client"
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Box
        sx={{
          height: "518px",
          backgroundColor: (theme)=>theme.palette.primary.main,
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1">hello world</Typography>
      </Box>
    </main>
  )
}
