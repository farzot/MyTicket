import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import *as request from "supertest";


describe("Admin (e2e)", () => {
    let app: INestApplication;
    let token: string;
    beforeAll(async ()=>{
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();
        const response = await request(app.getHttpServer())
          .post("/auth/signin")
          .send({
            login: "aali04@gmail.com",
            password: "Ssss1111",
          });
        token=response.body.token;
        console.log("Token--> ",token,"  <---");
    });//npm run test:e2e:watch
    test("/users (GET) -->200 Ok" ,()=>{
        return request(app.getHttpServer()).get("/admin").set("Authorization",`Bearer ${token}`).expect("Content-Type",/json/).expect(200);
    })
    afterAll(async () => {
        await app.close();
    });
});