import '../App.css';
import {Box} from "@mui/material";
import {CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function StatisticsPanel(props) {

    const {readStatus} = props;

    const numChaptersRead = Object.values(readStatus).reduce((a, b) => a + b, 0);
    const toalChapters = 1189;

    console.log(numChaptersRead);

    const percentage = numChaptersRead / toalChapters * 100;
    return (
        <Box>
            <p>{numChaptersRead} of {toalChapters} chapters read</p>
            <div style={{width: 200, height: 200}}>
                <CircularProgressbar value={percentage} text={`${percentage.toFixed(1)}%`}/>
            </div>
        </Box>
    );
}
