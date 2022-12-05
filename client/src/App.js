import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Home from './pages/home';
import Details from './pages/details';
import Book from './pages/book';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#85B934"
    },
    secondary: {
        dark: "#424242",
        main: "#9e9e9e",
        light: "#e0e0e0"
    },
    white: {
      main: "#FFFFFF",
      light: "#E0E1E4"
    }
  },
  typography: {
    fontSize: 12,
    button: {
        textTransform: 'none'
    }
  },
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    },
    MuiToggleButton: {
      defaultProps: {
        color: "primary"
      }
    },
    MuiToggleButtonGroup: {
      defaultProps: {
        exclusive: true,
        fullWidth: true,
        size: "small",
        color: "primary"
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          paddingBottom: 0
        }
      }
    },
    MuiCheckbox: {
      defaultProps: {
        size: "small"
      },
      styleOverrides: {
        root: {
          marginRight: -5,
          marginBottom: -5,
          marginTop: -5
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: 11
        }
      }
    }
  }
});
 
const App = () => {
 return (
   <ThemeProvider theme={theme}>
     <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/details/:id" element={<Details />} />
       <Route path="/book/:id" element={<Book/>} />
     </Routes>
   </ThemeProvider>
 );
};
 
export default App;