const request = require("supertest");
const app = require("../app");

describe("Task Management API", () => {

    test("GET / should return application information", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.application).toBe("Task Management API");
    });

    test("GET /health should return healthy status", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("healthy");
    });

    test("GET /api/tasks should return task list", async () => {
        const response = await request(app).get("/api/tasks");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });

    test("GET /api/tasks/1 should return a task", async () => {
        const response = await request(app).get("/api/tasks/1");

        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe(1);
    });

    test("GET /api/tasks/999 should return 404", async () => {
        const response = await request(app).get("/api/tasks/999");

        expect(response.statusCode).toBe(404);
        expect(response.body.error).toBe("Task not found");
    });

    test("POST /api/tasks should create a task", async () => {
        const response = await request(app)
            .post("/api/tasks")
            .send({ title: "Test CI/CD Pipeline" });

        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe("Test CI/CD Pipeline");
        expect(response.body.completed).toBe(false);
    });

});