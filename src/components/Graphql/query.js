import { gql } from "@apollo/client";

const IG_POSTS = gql`
  {
    ig_posts {
      limit
      page
      asc
      sort_by
      scopes
      total_data
      nodes {
        id
        caption
        created_at
        updated_at
        deleted_at
        is_archived
        user_id
        files {
          id
          view_link
        }
        user {
          id
          name
          email
        }
      }
    }
  }
`;

export { IG_POSTS };
