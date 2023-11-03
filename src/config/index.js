export const user = {
    id: 1, // Unique user identifier
    name: "John Doe", // User's full name
    username: "johndoe", // User's username/handle
    profilePicture:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D", // URL to the user's profile picture
    // Other user-related properties, such as bio, location, etc.
  };


export const post = {
    id: 1, // Unique post identifier
    user: user, // The user who created the post (as defined in the previous response)
    date: "2023-11-03T12:00:00", // Date and time when the post was created
    day: "2d",
    text: "This is the post text content. It can be as long as needed.", // The main content of the post
    comments: [
      {
        id: 101, // Unique comment identifier
        user: user, // The user who posted the comment (similar to the user object)
        text: "This is a top-level comment.", // Comment text
        replies: [
          {
            id: 201, // Unique reply identifier
            user: user, // The user who posted the reply
            text: "This is a reply to the top-level comment.",
            replies: [
              {
                id: 301, // Unique reply identifier
                user: user, // The user who posted the reply
                text: "This is a reply to the top-level comment.", // Reply text
                replies: [
                  {
                    id: 401, // Unique reply identifier
                    user: user, // The user who posted the reply
                    text: "This is a reply to the top-level comment.", // Reply text
                  },
                  // Other replies to the top-level comment...
                ], // Reply text
              },
              {
                id: 302, // Unique reply identifier
                user: user, // The user who posted the reply
                text: "This is a reply to the top-level comment.", // Reply text
                replies: [
                  {
                    id: 401, // Unique reply identifier
                    user: user, // The user who posted the reply
                    text: "This is a reply to the top-level comment.", // Reply text
                  },
                  // Other replies to the top-level comment...
                ], // Reply text
              },
              // Other replies to the top-level comment...
            ], // Reply text
          },
          // Other replies to the top-level comment...
        ],
      },
      {
        id: 102, // Unique comment identifier
        user: user, // The user who posted the comment (similar to the user object)
        text: "This is another top-level comment.", // Comment text
        replies: [
          {
            id: 202, // Unique reply identifier
            user: user, // The user who posted the reply
            text: "This is a reply to the second top-level comment.", // Reply text
          },
          // Other replies to the second top-level comment...
        ],
      },
      // Other top-level comments...
    ],
    // Other post-related properties, such as likes, shares, etc.
  }