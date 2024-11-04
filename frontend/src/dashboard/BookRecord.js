import '../App.css';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";

const bookRecordstyle = {display: 'flex'};
const bookNameStyle = {flex: '0 0 120px'}

export default function BookRecord(props) {

    const {book, readStatus, setReadStatus} = props;

    const toggleRead = (event) => {
        const chapterKey = event.currentTarget.value;
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
        // return isRead? "primary" : "neutral";
        return "primary";
    };

  return (
      <Box sx={bookRecordstyle}>
          <Box sx={bookNameStyle}>{book.name}</Box>
          <Box>
              {Array.from({length: Math.ceil(book.numChapters)}, (_, i) => {
                      const chapterNum = i + 1;
                      const chapterKey = book.name + "_" + chapterNum;
                      return <Button
                          key={chapterKey}
                          size="small"
                          variant={getButtonVariant(chapterKey)}
                          color={getButtonColor(chapterKey)}
                          disableElevation
                          value={chapterKey}
                          sx={{
                              minWidth: 42.81,
                          }}
                          onClick={toggleRead}>{chapterNum}</Button>
                  }
              )}
          </Box>
      </Box>
  );
}
