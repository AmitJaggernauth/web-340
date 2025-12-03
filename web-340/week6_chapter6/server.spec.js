const http = require('http');
const server = require('../src/server');

// TODO: Implement your tests here

const http = require('http');

describe("Fantasy Game Character Creation API", () => {
  let server;
  beforeAll(() => {
    server = require("../src/server");
  });

  afterAll(() => {
    server.close();
  });

  test("POST /create-character should create a character", async () => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/create-character?class=Warrior&gender=Male&funFact=Loves%20dragons",
      method: "POST"
    };

    const response = await makeRequest(options);
    expect(response.statusCode).toBe(200);
    expect(response.body).toContain("Character created");
  });

  test("POST /confirm-character should confirm creation", async () => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/confirm-character",
      method: "POST"
    };

    const response = await makeRequest(options);
    expect(response.statusCode).toBe(200);
    expect(response.body).toContain("Character confirmed");
  });

  test("GET /view-character should return created character", async () => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/view-character",
      method: "GET"
    };

    const response = await makeRequest(options);
    expect(response.statusCode).toBe(200);
    expect(response.body).toContain("Warrior");
    expect(response.body).toContain("Male");
    expect(response.body).toContain("Loves dragons");
  });
});

// Helper function for making HTTP requests
function makeRequest(options) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, res => {
      let data = "";
      res.on("data", chunk => (data += chunk));
      res.on("end", () => resolve({ statusCode: res.statusCode, body: data }));
    });
    req.on("error", reject);
    req.end();
  });
}