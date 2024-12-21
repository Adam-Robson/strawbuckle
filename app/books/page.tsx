import Books from "./_src/_components/Books";
import "./books-page.css";

export default function BooksPage() {
  return (
    <div className="page-container">
      <div className="books">
        <Books />
      </div>
    </div>
  );
}
