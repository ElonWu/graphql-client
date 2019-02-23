import { gql } from "apollo-boost";
export const getBooks = gql`
  {
    books {
      id
      name
      author {
        name
      }
    }
  }
`;
