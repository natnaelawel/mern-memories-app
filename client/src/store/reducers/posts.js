import { CREATE_POST, DELETE_POST, FETCH_POSTS, LIKE_POST, UPDATE_POST } from "../constants/actionsType";

const reducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_POSTS: {
      return action.payload;
    }
    case CREATE_POST: {
      return [...posts, action.payload];
    }
    case UPDATE_POST:
    case LIKE_POST:  
    {
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    }
    case DELETE_POST: {
      return posts.filter((post) =>post._id !== action.payload._id
      );
    }
    default: {
      return posts;
    }
  }
};
export default reducer;
