import Request from "../helpers/api";

class UsersServices extends Request {
    getUsersAll() {
        this.fetch(this.resource, { method: 'GET' });
    }

}

export default UsersServices;