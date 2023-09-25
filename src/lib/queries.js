import { gql } from "@apollo/client";

export const GET_NAVIGATION_MENU = gql`
  query GetNavigationMenu {
    menuItems(where: { location: PRIMARY }) {
      edges {
        node {
          parentId
          id
          label
          url
          uri
          childItems {
            edges {
              node {
                id
                label
                url
                uri
                childItems {
                  edges {
                    node {
                      id
                      label
                      url
                      uri
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_MENU_ITEMS = gql`
  query MenuItems {
    menuItems(where: { location: PRIMARY }) {
      nodes {
        id
        parentId
        title: label
        uri
        childItems {
          nodes {
            title: label
            uri
            url
          }
        }
      }
    }
  }
`;

// export const GET_POSTS = gql`
//   query GetPosts {
//     posts(first: 8) {
//       nodes {
//         title
//         content
//         uri
//         date
//         excerpt
//         id
//       }
//       pageInfo {
//         hasPreviousPage
//         hasNextPage
//       }
//     }
//   }
// `;

export const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id, idType: URI) {
      title
      content
      date
      uri
      author {
        node {
          firstName
          lastName
          name
        }
      }
    }
  }
`;

export const GET_SITE_INFO = gql`
  query GetSiteInfo {
    generalSettings {
      description
      title
    }
  }
`;

export const GET_PAGE_DATA = gql`
  query GetPage($id: ID!) {
    page(id: $id, idType: URI) {
      author {
        node {
          avatar {
            url
          }
          uri
          name
        }
      }
      content(format: RENDERED)
      featuredImage {
        node {
          mediaItemUrl
          uri
          srcSet
          sourceUrl
        }
      }
      modifiedGmt
      title
      uri
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: SLUG!) {
    pageBy(uri: $slug) {
      id
      title
      content
      uri
      modifiedGmt
      featuredImage {
        node {
          mediaItemUrl
          uri
          srcSet
          sourceUrl
        }
      }
      author {
        node {
          avatar {
            url
          }
          uri
          name
        }
      }
      prevPage: pageBy {
        uri
      }
      nextPage: pageBy(relation: NEXT) {
        uri
      }
    }
  }
`;

// export const GET_POSTS = gql`
//   query GetPosts($count: COUNT!, $end: END_CURSOR) {
//     posts(first: 8, endCursor: $end) {
//       nodes {
//         title
//         content
//         uri
//         date
//         excerpt
//         id
//       }
//       pageInfo {
//         hasPreviousPage
//         hasNextPage
//       }
//     }
//   }
// `;

export const GET_POSTS = gql`
  query GetPosts($after: String, $first: Int) {
    posts(after: $after, first: $first) {
      nodes {
        title
        id
        content
        excerpt
        uri
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export const GET_END_CURSOR = gql`
  query GetEndCursor($first: Int) {
    posts(first: $first) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;
