import {Database} from '../data/database'

/**
 * add a new user
 * @param req
 * @param res
 */
export const addNewUser = (req, res) => {
    try{
        Database.addUser(req.body)
        res.json({'message': 'success'});
    }catch (e) {
        res.json({error: e.message});
    }
};

/**
 * get all users
 * @param req
 * @param res
 */
export const getUsers = (req, res) => {
    try{
        res.json({data: Database.getUsers()});
    }catch (e) {
        res.json({error: e.message});
    }
};

/**
 * delete a user
 * @param req
 * @param res
 */
export const deleteUser = (req, res) => {
    try{
        Database.removeUser(req.params.email)
        res.status(200).json({'message ': 'success'});
    }catch (e) {
        res.status(500).json({error: e.message});
    }
}

/**
 * return all events
 * @param req
 * @param res
 */
export const getAllEvents = (req, res) => {
    try{
        res.json({data: Database.getAllEvents()});
    }catch (e) {
        res.json({error: e.message});
    }
}

/**
 * get all events for a user base on email
 * @param req
 * @param res
 */
export const getAllEventsForUser = (req, res) => {
    try{
        res.json({data: Database.getAllEventsForUser(req.params.email)});
    }catch (e) {
        res.json({error: e.message});
    }
}

/**
 * return all events for the last 24 hours
 * @param req
 * @param res
 */
export const getAllEventsForLastDay = (req, res) => {
    try{
        res.json({data: Database.getAllEventsForLastDay()});
    }catch (e) {
        res.json({error: e.message});
    }
}

