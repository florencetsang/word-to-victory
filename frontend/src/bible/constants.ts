class Book {
    name: string;
    numChapters: number;
    bibleAppShortName: string;

    private constructor(name: string, numChapters: number, bibleAppShortName: string) {
        this.name = name;
        this.numChapters = numChapters;
        this.bibleAppShortName = bibleAppShortName;
    }

    static GENESIS: Book = new Book('Genesis', 50, 'GEN');
    static EXODUS: Book = new Book('Exodus', 40, 'EXO');
    static LEVITICUS: Book = new Book('Leviticus', 27, 'LEV');
    static NUMBERS: Book = new Book('Numbers', 36, 'NUM');
    static DEUTERONOMY: Book = new Book('Deuteronomy', 34, 'DEU');
    static JOSHUA: Book = new Book('Joshua', 24, 'JOS');
    static JUDGES: Book = new Book('Judges', 21, 'JDG');
    static RUTH: Book = new Book('Ruth', 4, 'RUT');
    static SAMUEL1: Book = new Book('1 Samuel', 31, '1SA');
    static SAMUEL2: Book = new Book('2 Samuel', 24, '2SA');
    static KINGS1: Book = new Book('1 Kings', 22, '1KI');
    static KINGS2: Book = new Book('2 Kings', 25, '2KI');
    static CHRONICLES1: Book = new Book('1 Chronicles', 29, '1CH');
    static CHRONICLES2: Book = new Book('2 Chronicles', 36, '2CH');
    static EZRA: Book = new Book('Ezra', 10, 'EZR');
    static NEHEMIAH: Book = new Book('Nehemiah', 13, 'NEH');
    static ESTHER: Book = new Book('Esther', 10, 'EST');
    static JOB: Book = new Book('Job', 42, 'JOB');
    static PSALMS: Book = new Book('Psalms', 150, 'PSA');
    static PROVERBS: Book = new Book('Proverbs', 31, 'PRO');
    static ECCLESIASTES: Book = new Book('Ecclesiastes', 12, 'ECC');
    static SONGOFSONGS: Book = new Book('Song of Songs', 8, 'SNG');
    static ISIAH: Book = new Book('Isiah', 66, 'ISA');
    static JEREMIAH: Book = new Book('Jeremiah', 52, 'JER');
    static LAMENTATIONS: Book = new Book('Lamentations', 5, 'LAM');
    static EZEKIEL: Book = new Book('Ezekiel', 48, 'EZK');
    static DANIEL: Book = new Book('Daniel', 12, 'DAN');
    static HOSEA: Book = new Book('Hosea', 14, 'HOS');
    static JOEL: Book = new Book('Joel', 3,' JOL');
    static AMOS: Book = new Book('Amos', 9, 'AMO');
    static OBADIAH: Book = new Book('Obadiah', 1, 'OBA');
    static JONAH: Book = new Book('Jonah', 4, 'JON');
    static MICAH: Book = new Book('Micah', 7, 'MIC');
    static NAHUM: Book = new Book('Nahum', 3, 'NAM');
    static HABAKKUK: Book = new Book('Habakkuk', 3, 'HAB');
    static ZEPHANIAH: Book = new Book('Zephaniah', 3, 'ZEP');
    static HAGGAI: Book = new Book('Haggai', 2, 'HAG');
    static ZECHARIAH: Book = new Book('Zechariah', 14, 'ZEC');
    static MALACHI: Book = new Book('Malachi', 4, 'MAL');
    static MATTHEW: Book = new Book('Matthew', 28, 'MAT');
    static MARK: Book = new Book('Mark', 16, 'MRK');
    static LUKE: Book = new Book('Luke', 24, 'LUK');
    static JOHN: Book = new Book('John', 21, 'JHN');
    static ACTS: Book = new Book('Acts', 28, 'ACT');
    static ROMANS: Book = new Book('Romans', 16, 'ROM');
    static CORINTHIANS1: Book = new Book('1 Corinthians', 16, '1CO');
    static CORINTHIANS2: Book = new Book('2 Corinthians', 13, '2CO');
    static GALATIANS: Book = new Book('Galatians', 6, 'GAL');
    static EPHESIANS: Book = new Book('Ephesians', 6, 'EPH');
    static PHILLIPIANS: Book = new Book('Phillipians', 4, 'PHP');
    static COLOSSIANS: Book = new Book('Colossians', 4, 'COL');
    static THESSALONIANS1: Book = new Book('1 Thessalonians', 5, '1TH');
    static THESSALONIANS2: Book = new Book('2 Thessalonians', 3, '2TH');
    static TIMOTHY1: Book = new Book('1 Timothy', 6, '1TI');
    static TIMOTHY2: Book = new Book('2 Timothy', 4, '2TI');
    static TITUS: Book = new Book('Titus', 3, 'TIT');
    static PHILEMON: Book = new Book('Philemon', 1, 'PHM');
    static HEBREWS: Book = new Book('Hebrews', 13, 'HEB');
    static JAMES: Book = new Book('James', 5, 'JAS');
    static PETER1: Book = new Book('1 Peter', 5, '1PE');
    static PETER2: Book = new Book('2 Peter', 3, '2PE');
    static JOHN1: Book = new Book('1 John', 5, '1JN');
    static JOHN2: Book = new Book('2 John', 1, '2JN');
    static JOHN3: Book = new Book('3 John', 1, '3JN');
    static JUDE: Book = new Book('Jude', 1, 'JUD');
    static REVELATION: Book = new Book('Revelation', 22, 'REV');
}

const BOOKS = [
    Book.GENESIS,
    Book.EXODUS,
    Book.LEVITICUS,
    Book.NUMBERS,
    Book.DEUTERONOMY,
    Book.JOSHUA,
    Book.JUDGES,
    Book.RUTH,
    Book.SAMUEL1,
    Book.SAMUEL2,
    Book.KINGS1,
    Book.KINGS2,
    Book.CHRONICLES1,
    Book.CHRONICLES2,
    Book.EZRA,
    Book.NEHEMIAH,
    Book.ESTHER,
    Book.JOB,
    Book.PSALMS,
    Book.PROVERBS,
    Book.ECCLESIASTES,
    Book.SONGOFSONGS,
    Book.ISIAH,
    Book.JEREMIAH,
    Book.LAMENTATIONS,
    Book.EZEKIEL,
    Book.DANIEL,
    Book.HOSEA,
    Book.JOEL,
    Book.AMOS,
    Book.OBADIAH,
    Book.JONAH,
    Book.MICAH,
    Book.NAHUM,
    Book.HABAKKUK,
    Book.ZEPHANIAH,
    Book.HAGGAI,
    Book.ZECHARIAH,
    Book.MALACHI,
    Book.MATTHEW,
    Book.MARK,
    Book.LUKE,
    Book.JOHN,
    Book.ACTS,
    Book.ROMANS,
    Book.CORINTHIANS1,
    Book.CORINTHIANS2,
    Book.GALATIANS,
    Book.EPHESIANS,
    Book.PHILLIPIANS,
    Book.COLOSSIANS,
    Book.THESSALONIANS1,
    Book.THESSALONIANS2,
    Book.TIMOTHY1,
    Book.TIMOTHY2,
    Book.TITUS,
    Book.PHILEMON,
    Book.HEBREWS,
    Book.JAMES,
    Book.PETER1,
    Book.PETER2,
    Book.JOHN1,
    Book.JOHN2,
    Book.JOHN3,
    Book.JUDE,
    Book.REVELATION
];

const BOOKS_SET = new Set<Book>();
for (let i = 0; i < BOOKS.length; i++) {
    BOOKS_SET.add(BOOKS[i]);
}

const getBookFromName = (name: string) => {
    for (let i = 0; i < BOOKS.length; i++) {
        if (name === BOOKS[i].name) {
            return BOOKS[i];
        }
    }
    return null;
}

class BookChapter {
    book: Book;
    chapter: number;

    constructor(book: Book, chapter: number) {
        this.book = book;
        this.chapter = chapter;
    }

    toString() {
        return `${this.book.name} - ${this.chapter}`;
    }

    isValid() {
        return BOOKS_SET.has(this.book) && this.chapter > 0 && this.chapter <= this.book.numChapters;
    }

    getBibleAppLink = () => {
        return `https://bible.com/bible/139/${this.book.bibleAppShortName}.${this.chapter}.RCUV`;
    };

    static fromString(bookChapterStr: string) {
        const split = bookChapterStr.split(' - ');
        if (split.length !== 2) {
            return null;
        }
        const book = getBookFromName(split[0]);
        if (!book) {
            return null;
        }
        let chapter = -1;
        try {
            chapter = parseInt(split[1]);
        } catch {

        }
        if (chapter === -1) {
            return null;
        }
        const bookChapter = new BookChapter(book, chapter);
        if (!bookChapter.isValid()) {
            return null;
        }
        return bookChapter;
    }
}

export {
    Book,
    BOOKS,
    getBookFromName,
    BookChapter
};