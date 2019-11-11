import {
    addNewUser,
    getUsers,
    deleteUser,
    getAllEvents,
    getAllEventsForLastDay,
    getAllEventsForUser
} from '../controllers/ns8Controller';

const routes = (app) => {
    app.route('/users')
    .get((req, res, next) => {
        next();
    }, getUsers)

    // POST endpoint
    .post(addNewUser);

    app.route('/user/:email')
    // delete request
    .delete(deleteUser);

    app.route('/events/all')
    .get((req, res, next) => {
        next();
    }, getAllEvents)

    app.route('/events/:email')
    .get((req, res, next) => {
        next();
    }, getAllEventsForUser)

    app.route('/lastdayevents')
    .get((req, res, next) => {
        next();
    }, getAllEventsForLastDay)

}

export default routes;
