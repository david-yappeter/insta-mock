import {gql} from "@apollo/client";

const GET_TOKEN = gql`
mutation ($email: String!, $password: String!){
  token{
    login(email: $email, password: $password){
      type
      token
    }
  }
}
`

export { GET_TOKEN };