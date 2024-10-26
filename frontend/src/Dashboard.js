import logo from './logo.svg';
import './App.css';
import { BOOKS } from './bible/constants.ts';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function Dashboard() {
  return (
    <div>
      {BOOKS && BOOKS.map(book =>
          <div>
            <p>{book.name}</p>
            {/*<p>{book.numChapters}</p>*/}
            <ButtonGroup size="small">
            {book.numChapters && Array.from({ length: book.numChapters }, (_, i) =>
                <Button key={i}>{i}</Button>
            )}
            </ButtonGroup>
          </div>
      )}

    </div>
  );
}

export default Dashboard;
