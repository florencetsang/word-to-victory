import './App.css';
import { BOOKS } from './bible/constants.ts';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";

function Dashboard() {

    const [readStatus, setReadStatus] = useState({});


    useEffect(() => {
        const readStatus = {}
        BOOKS.map(book => {
            for (let i = 1; i < book.numChapters+1; i++) {
                const chapterKey = book+"_"+i;
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
        return isRead? "solid" : "outlined";
    };

  return (
      <div>
          <p>{readStatus["Genesis_1"]}</p>
          <p>{readStatus["Genesis_2"]}</p>
          {/*<p>{read}</p>*/}
          {BOOKS && BOOKS.map(book =>
              <div>
                  <p>{book.name}</p>
                  {/*<p>{book.numChapters}</p>*/}
                  {book.numChapters && Array.from({length: Math.ceil(book.numChapters / 20)}, (_, i_20) =>
                      <div>
                          <ButtonGroup size="small">
                              {book.numChapters && Array.from({length: Math.min(20, book.numChapters - i_20 * 20)}, (_, i) => {
                                      const chapterNum = i + 1 + i_20 * 20;
                                      const chapterKey = book.name + "_" + chapterNum;
                                      return <Button variant={getButtonVariant(chapterKey)} key={chapterKey}
                                                     onClick={event => toggleRead(event, chapterKey)}>{chapterNum}</Button>
                                      // return <Button>{i+1+i_20*20}</Button>
                                  }
                              )}
                          </ButtonGroup>
                      </div>
                  )}
                  {/*<ButtonGroup size="small">*/}
                  {/*{book.numChapters && Array.from({ length: book.numChapters }, (_, i) =>*/}
                  {/*    <Button key={i}>{i}</Button>*/}
                  {/*)}*/}
                  {/*</ButtonGroup>*/}
              </div>
          )}

      </div>
  );
}

export default Dashboard;
