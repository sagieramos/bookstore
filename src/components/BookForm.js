import { v4 as uuidv4 } from 'uuid';

const BookForm = () => (
  <div className="book-input">
    <h2>Add a New Book</h2>
    <form>
      <input
        type="text"
        placeholder="Book Title"
        value=""
        onChange={(e) => (e.target.value)}
      />
      <select
        value=""
        onChange={(e) => (e.target.value)}
      >
        <option value="" disabled>
          Select Category
        </option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default BookForm;
