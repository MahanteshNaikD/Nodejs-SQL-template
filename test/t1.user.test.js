const request = require('supertest')
const server = require('../index')
const db = require('../src/models/index')
beforeAll(done =>{
    done()
})
beforeAll(async() =>{
    await db.sequelize.sync()
})


// test cases for mariadb
describe("All user Apis", () => {
    /**
 Test the get all users
  */
 it("it should get all users", async() => {
   const res = await request(server)
     .get("/api/user/findAllUser")
     expect(res.statusCode).toBe(200);
     expect(res.body).toBeInstanceOf(Object)
 });
 /**
  Test to create user
  */
 it("it should create user", async() =>{
    const userData={
        email:"ar2@email.com",
        name:"ar",
        password:"qwerty@123"
    }
    const res = await request(server)
    .post('/api/user/createUser')
    .send(userData)
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Object)
 })
 /**
  Test to create user
  */
 it("it should get single user", async() =>{
    const userdata={
        email:"ar2@email.com"
    }
    const res = await request(server)
    .get('/api/user/findOneUser')
    .send(userdata)
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Object)
 })

 /**
  * Test to update user
  */
 it("it should update single user", async() =>{
    const userdata={
        email:"ar2@email.com",
        name:"ar2q"
    }
    const res = await request(server)
    .put('/api/user/updateUser')
    .send(userdata)
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Object)
 })
 /**
  * Test to delete user
  */
 it("it should delete single user", async() =>{
    const userdata={
        email:"ankit@email.com",
    }
    const res = await request(server)
    .delete('/api/user/deleteOneUser')
    .send(userdata)
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Object)
 })
})

// test cases for mongodb

afterAll((done) => {
    server.close()
    done();
  })