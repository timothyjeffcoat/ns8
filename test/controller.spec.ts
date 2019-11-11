import { expect } from 'chai';
import 'mocha';
import * as app from '../index';
import {agent as request} from 'supertest';

describe('controller function', () => {

    it('should POST a new user', async function () {
        const res = await request(app).post('/users').send({
            "email": "test2@ns8.com",
            "password": "passwordIsPizza",
            "phone": "333-222-1111"
        });
        expect(res.status).to.equal(200);
    });
    it('should POST a new user', async function () {
        const res = await request(app).post('/users').send({
            "email": "test@ns8.com",
            "password": "HotDogs"
        });
        expect(res.status).to.equal(200);
    });
    it('should GET /users', async function () {
        const res = await request(app).get('/');
        expect(res.status).to.equal(200);
    });
    it('should GET all events', async function () {
        const res = await request(app).get('/events/all');
        expect(res.status).to.equal(200)
        expect(res.body).not.to.be.empty
    });
    it('should GET all events for the last 24 hours', async function () {
        const res = await request(app).get('/lastdayevents');
        expect(res.status).to.equal(200)
        expect(res.body).not.to.be.empty
    });
    it('should GET all events for the given email', async function () {
        const res = await request(app).get('/events/test2@ns8.com');
        expect(res.status).to.equal(200)
        expect(res.body).not.to.be.empty
    });
});

