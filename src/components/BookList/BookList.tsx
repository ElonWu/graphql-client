import * as React from "react";
import { graphql, ChildDataProps } from "react-apollo";
import { getBooks } from "api/book";

interface Book {
  id?: string;
  name?: string;
  gerne?: string;
}
interface Props extends ChildDataProps<{}, { books: Array<Book> }> {}

class BookList extends React.Component<Props> {
  get renderBooks() {
    const { loading, error, books = [] } = this.props.data;
    if (error) {
      return "error";
    }
    if (loading) {
      return "loadng...";
    }
    console.log(books);
    return books.map(({ id, name }: Book) => <li key={id}>{name}</li>);
  }
  render() {
    return <ul>{this.renderBooks}</ul>;
  }
}

export default graphql(getBooks)(BookList);
