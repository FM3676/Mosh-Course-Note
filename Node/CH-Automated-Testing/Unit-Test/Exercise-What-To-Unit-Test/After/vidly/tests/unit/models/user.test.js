const { User } = require("../../../models/user");
const jwt = require("jsonwebtoken");
const config = require("config");
const mongoose = require("mongoose");


/* 
    describe("user.generateAuthToken", () => {
        it("should return a valid JWT", () => {
            const payload = { _id: new mongoose.Types.ObjectId().toHexString(), isAdmin: true };
            const user = new User(payload);
            const token = user.generateAuthToken();
            const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
            expect(decoded).toMatchObject(payload);
        });
    });
    The reason we get this error is because when we run our tests using Jest,  Jest configures NODE_ENV or node environment to test.
*/


describe("user.generateAuthToken", () => {
  it("should return a valid JWT", () => {
    const payload = { _id: new mongoose.Types.ObjectId().toHexString(), isAdmin: true };
    const user = new User(payload);
    const token = user.generateAuthToken();
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    expect(decoded).toMatchObject(payload);
  });
});
