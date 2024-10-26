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
            {book.numChapters && Array.from({ length: Math.ceil(book.numChapters / 20) }, (_, i_20) =>
                <div>
                  <ButtonGroup size="small">
                    {book.numChapters && Array.from({ length: Math.min(20,book.numChapters-i_20*20) }, (_, i) =>
                        <Button key={i+1+i_20*20}>{i+1+i_20*20}</Button>
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
