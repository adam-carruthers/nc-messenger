const request = require("supertest");

const app = require("../app");

describe("404 endpoint", () => {
  test("/xyzk GET return 404", () => {
    return request(app)
      .get("/xyzk")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toEqual("Route not found");
      });
  });
});
