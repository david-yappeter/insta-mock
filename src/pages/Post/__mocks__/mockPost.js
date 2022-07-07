import { axiosMockAdapterInstance } from "../../../redux/mocks/adapter";
import flushPromise from "../../../utils/flushPromise";
import posts from "./mockData";
import { parseQueryString } from "../../../redux/util";

const mockPost = () => {
  axiosMockAdapterInstance.onGet(/\/api\/posts\/?.*/).reply(async (config) => {
    const { page, limit } = parseQueryString(config.url) || {};

    await flushPromise(1000);
    if (page && limit) {
      return [200, { posts: posts.slice((page - 1) * limit, page * limit) }];
    }
    return [200, { posts }];
  });

  axiosMockAdapterInstance.onGet("");
};

export { mockPost };
