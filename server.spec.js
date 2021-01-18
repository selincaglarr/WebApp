const app = require("./server"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

it("gets the test endpoint", async done => {
    const response = await request.post("/can-i-go-out");
    let agee=response.status.yas
    expect(agee).toBe(String);
    // expect(response.body.message).toBe("pass!");
    done();
  });