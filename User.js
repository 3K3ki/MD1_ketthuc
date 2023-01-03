class User {
    id;
    username;
    password;


    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
}