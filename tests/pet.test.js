jest.setTimeout(15000);
const request = require("supertest");
const app = require("../app");

describe("Pet API Tests", () => {

  test("GET / should return message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  test("GET /api/pets should return array", async () => {
    const res = await request(app).get("/api/pets");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Invalid route should return 404", async () => {
    const res = await request(app).get("/invalidroute");
    expect(res.statusCode).toBe(404);
  });

  test("POST /api/adoptions should create request", async () => {
    const res = await request(app)
      .post("/api/adoptions")
      .send({
        userId: "123",
        petId: "456"
      });

    expect(res.statusCode).toBe(201);
  });

  test("POST /api/adoptions without data should fail", async () => {
    const res = await request(app)
      .post("/api/adoptions")
      .send({});

    expect(res.statusCode).toBe(400);
  });

});