import logo from './logo.svg';
import './App.css';
import { BOOKS } from './bible/constants.ts';

function Dashboard() {
  return (
    <div>
      {BOOKS && BOOKS.map(book =>
          <div>
            <p>{book.name}</p>
            {/*<p>{book.numChapters}</p>*/}
            {book.numChapters && Array.from({ length: book.numChapters }, (_, i) =>
                <button key={i}>{i}</button>
            )}
          </div>
      )}

    </div>
  );
}

export default Dashboard;
