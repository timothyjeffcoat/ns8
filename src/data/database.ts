import * as moment from 'moment'

export interface User {
    email: string
    password: string
    phone: string
}

export interface Event {
    type: string
    created: number
    email: string
}

export abstract class Database {
    private static users: Array<User> = []
    private static events: Array<Event> = []

    /**
     * log events by type and email
     *
     * @param type
     * @param email
     */
    private static logEvent(type: string, email: string){
        this.addEvent({
            type,
            created: Date.now(),
            email
        })
    }

    /**
     * add a user to the users array
     * @param user
     */
    public static addUser(user: User) {
        if (this.userExists(user.email)){
            throw new Error('User exists already')
        }
        try{
            this.users.push(user)
            this.logEvent('USER_CREATED', user.email)
        }catch (e) {
            throw new Error(e.message)
        }
    }

    /**
     * remove a user from the database
     * @param email
     */
    public static removeUser(email: string) {
        try{
            let index = this.users.findIndex((finduser) => {
                return finduser.email.toLowerCase() === email.toLowerCase()
            })
            this.users.splice(index,1)
            this.logEvent('DELETED_USER', email)
        }catch (e) {
            throw new Error(e.message)
        }
    }

    /**
     * get all users
     */
    public static getUsers() {
        this.logEvent('GET_ALL_USERS', 'generic@gmail.com')
        return this.users
    }

    /**
     * check for the existence of an email in the users array
     * @param email
     */
    public static userExists(email: string) {
        const userExists = this.users.find((user) => {
            return user.email.toLowerCase() === email.toLowerCase()
        })
        return !!userExists
    }

    /**
     * add an event to the database
     * @param event
     */
    public static addEvent(event: Event) {
        this.events.push(event)
    }

    /**
     * return all events for the last day or 24 hours
     */
    public static getAllEventsForLastDay() {
        return this.events.filter(ev => {
            let dateRangeValid = true
            // 24 hours ago
            let dateFrom = moment().subtract(24,'h').format('x');
            const start = Number.parseInt(dateFrom)
            return dateRangeValid = ev.created >= start
        }).sort((firstEvent: Event, secondEvent: Event) => {
            if (firstEvent.created < secondEvent.created) return 1
            else if (firstEvent.created > secondEvent.created) return -1
            return 0
        })
    }

    /**
     * return all events
     */
    public static getAllEvents() {
        return this.events
    }

    /**
     * get all events for a given user based on email
     * @param email
     */
    public static getAllEventsForUser(email: string) {
        return this.events.filter(ev => {
            let validEmail = true
            return validEmail = ev.email === email
        }).sort((firstEvent: Event, secondEvent: Event) => {
            if (firstEvent.created < secondEvent.created) return 1
            else if (firstEvent.created > secondEvent.created) return -1
            return 0
        })
    }

}

