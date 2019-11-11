import {Database} from '../src/data/database';
import { expect } from 'chai';
import 'mocha';

describe('Database function', () => {

    it('should return user array', () => {
        const result = Database.getUsers()
        console.log('all users',result)
        expect(result).to.be.an("array");
    });

});
