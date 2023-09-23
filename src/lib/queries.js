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

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        title
        content
        uri
        date
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;

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
