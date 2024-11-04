import '../App.css';
import { BOOKS } from '../bible/constants.ts';
import {useEffect, useState} from "react";
import {Box, Grid} from "@mui/material";
import BookRecord from "./BookRecord";
import StatisticsPanel from "./StatisticsPanel";

const BOOKS1 = BOOKS.slice(0,23);
const BOOKS2 = BOOKS.slice(23,BOOKS.length);
const statisticsPanelStyle = {
    display: 'flex',
    justifyContent: 'center',
    width:'100%'
};

function Dashboard() {

    const [readStatus, setReadStatus] = useState({});

    useEffect(() => {
        const readStatus = {}
        BOOKS.map(book => {
            for (let i = 1; i < book.numChapters+1; i++) {
                const chapterKey = book.name+"_"+i;
                readStatus[chapterKey] = localStorage.getItem(chapterKey) === "true";
            }
        })
        setReadStatus(readStatus);
    }, [])

  return (
      <Box sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
      }}>
          <Box sx={statisticsPanelStyle}>
            <StatisticsPanel readStatus={readStatus}/>
          </Box>
          <Box sx={{
              flex: '0 0 32px'
          }}></Box>
          <Grid container spacing={1}>
              <Grid item xs={6}>
                  {BOOKS1.map(book =>
                      <BookRecord key={book.name} book={book} readStatus={readStatus} setReadStatus={setReadStatus}/>
                  )}
              </Grid>
              <Grid item xs={6}>
                  {BOOKS2.map(book =>
                       <BookRecord key={book.name} book={book} readStatus={readStatus} setReadStatus={setReadStatus}/>
                  )}
              </Grid>
          </Grid>
      </Box>
  );
}

export default Dashboard;
