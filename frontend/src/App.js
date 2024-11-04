import './App.css';
import Dashboard from "./Dashboard";
import {Box} from "@mui/material";

function App() {
  return (
    <div className="App">
        <Box sx={{
            padding: '20px',
            margin: 'auto',
            maxWidth: '1800px'
        }}>
            <Dashboard/>
        </Box>
    </div>
  );
}

export default App;
