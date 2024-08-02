import "@testing-library/jest-dom/vitest";

import { graphql, http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll } from "vitest";

const posts = [
  {
    userId: 1,
    id: 1,
    title: "first post title",
    body: "first post body",
  },
  // ...
];

export const restHandlers = [
  http.get("https://rest-endpoint.example/path/to/posts", () => {
    return HttpResponse.json(posts);
  }),
];

const graphqlHandlers = [
  graphql.query("ListPosts", () => {
    return HttpResponse.json({
      data: { posts },
    });
  }),
];

const server = setupServer(...restHandlers, ...graphqlHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
