import { gql } from "@apollo/client";

const GET_TOKEN = gql`
  mutation($email: String!, $password: String!) {
    token {
      login(email: $email, password: $password) {
        token
      }
    }
  }
`;

const POST_CREATE = gql`
mutation ($caption: String!, $files: [Upload!]!){
  ig_post{
    create(input:{
      caption: $caption
      files: $files
    }){
      id
      caption
    }
  }
}
`;

export { GET_TOKEN, POST_CREATE };
