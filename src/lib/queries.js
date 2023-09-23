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
