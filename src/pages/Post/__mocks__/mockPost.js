import { axiosMockAdapterInstance } from "../../../redux/mocks/adapter";
import flushPromise from "../../../utils/flushPromise";
import posts from "./mockData";

const mockPost = () => {
  axiosMockAdapterInstance.onGet("/api/posts").reply(async () => {
    await flushPromise(2000);
    return [200, { posts }];
  });
};

export { mockPost };
