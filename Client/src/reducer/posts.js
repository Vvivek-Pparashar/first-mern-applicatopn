const reducer = (posts = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...posts, action.payload];
    case "FETCH_ALL":
      return action.payload;

    default:
      return posts;
  }
};

export default reducer;
