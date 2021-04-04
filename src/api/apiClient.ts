import axios, { AxiosResponse } from "axios";

type PostApiResponse = {
  userId: number
  id: number
  title: string
  body: string
}[];

type CommentApiResponse = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}[];

const errorHandler = (error) => console.log(error);
const requestHandler = (request) => request;
const responseHandler = (response) => response;

export default () => {
  const postApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });
  postApi.interceptors.response.use(responseHandler, errorHandler);
  postApi.interceptors.request.use(requestHandler, errorHandler);

  return {
    getComments: (): Promise<AxiosResponse<CommentApiResponse>> =>
      postApi.get('/comments'),
    getPosts: (): Promise<AxiosResponse<PostApiResponse>> =>
      postApi.get('/posts'),
  };
};
