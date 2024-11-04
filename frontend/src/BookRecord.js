import './App.css';
import Button from '@mui/material/Button';

export default function BookRecord(props) {

    const {book, readStatus, setReadStatus} = props;

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
          <p>{book.name}</p>
          {Array.from({length: Math.ceil(book.numChapters)}, (_, i) => {
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
  );
}
