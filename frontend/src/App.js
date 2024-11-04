import './App.css';
import Dashboard from "./dashboard/Dashboard";
import {Box} from "@mui/material";
import AppMenu from "./header/AppMenu";

function App() {
  return (
    <div className="App">
        <AppMenu/>
        <Box sx={{
            padding: '20px',
            margin: 'auto',
            maxWidth: '2000px'
        }}>
            <Dashboard/>
        </Box>
    </div>
  );
}

export default App;
