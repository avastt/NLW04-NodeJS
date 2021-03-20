import request from 'supertest';
import { app } from '../app';
import {getConnection} from 'typeorm';
import createConnection from '../database';


describe("Surveys", () =>{
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new survey", async () => {
        const response = await request(app).post("/surveys").send({
            title: "Title example",
            description: "Description Example"
        });

        expect(response.status).toBe(201);
    });

    it("Should be able to get all surveys", async () => {
        await request(app).post("/surveys").send({
            title: "Title example2",
            description: "Description Example2"
        });

        const response = await request(app).get("/sruveys");
        expect(response.body.length).toBe(2);
        
    });
});

