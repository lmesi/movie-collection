import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Nav";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
