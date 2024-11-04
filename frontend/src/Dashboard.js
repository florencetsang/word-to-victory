import './App.css';
import { BOOKS } from './bible/constants.ts';
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";

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

    const toggleRead = (event, chapterKey) => {
        const currentRead = readStatus[chapterKey];
        const newRead = !currentRead;
        const newReadStatus = {...readStatus};
        newReadStatus[chapterKey] = newRead;
        setReadStatus(newReadStatus);
        localStorage.setItem(chapterKey, JSON.stringify(newRead));
    };

    const getReadStatus = (chapterKey) => {
        return readStatus[chapterKey];
    };

    const getButtonVariant = (chapterKey) => {
        let isRead = getReadStatus(chapterKey);
        return isRead? "contained" : "outlined";
    };

    const getButtonColor = (chapterKey) => {
        let isRead = getReadStatus(chapterKey);
        return isRead? "success" : "neutral";
    };

  return (
      <div>
          <p>{readStatus["Genesis_1"]}</p>
          <p>{readStatus["Genesis_2"]}</p>
          {BOOKS && BOOKS.map(book =>
              <div>
                  <p>{book.name}</p>
                      {Array.from({length: Math.ceil(book.numChapters)}, (_, i) =>
                          {
                              const chapterNum = i + 1;
                              const chapterKey = book.name + "_" + chapterNum;
                              return <Button
                                  key={chapterKey}
                                  size="small"
                                  variant={getButtonVariant(chapterKey)}
                                  color={getButtonColor(chapterKey)}
                                  disableElevation
                                  sx={{
                                      minWidth: 42.81,
                                  }}
                                  onClick={event => toggleRead(event, chapterKey)}>{chapterNum}</Button>

                          }
                      )}
              </div>
          )}

      </div>
  );
}

export default Dashboard;
