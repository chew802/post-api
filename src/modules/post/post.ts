import apiClient from '../../api/apiClient'

export const getSortedPosts = async (req,res) => {
  const api = apiClient();
  //can make it parallel
  const comments = await api.getComments();
  const posts = await api.getPosts();

  //can optimize by doing grouping
  const calculatedComments = posts?.data.map(post => {
    return {
      post_id: post.id,
      post_title: post.title,
      post_body: post.body,
      total_number_of_comments: comments?.data?.filter(comment => comment.postId === post.id)?.length
    }
  }).sort((postA,postB) => {
    if(postA.total_number_of_comments > postB.total_number_of_comments) {
      return 1;
    } else if(postA.total_number_of_comments < postB.total_number_of_comments) {
      return -1;
    } 
    return 0;
  });
  res.send(calculatedComments);
}

export const searchComments = async (req, res) => {
  const { search: strToSearch } = req.query;
  const api = apiClient();
  //can make it parallel
  const comments = await api.getComments();
  //Should using search engine instead of run time code filtering when data is much
  //Limit the search result per page will works too. 
  //Search result might be cachable and reuse. 
  const searchResults = comments?.data?.filter(comment => {
    return comment.name.search(strToSearch) >=0 || 
    comment.body.search(strToSearch) >= 0 ||
    comment.email.search(strToSearch) >= 0;
  })
  res.send(searchResults);
}