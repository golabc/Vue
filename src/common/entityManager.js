export default class EntityManager {

    static persist(key, value) {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem(key, value);
        } else {
            console.log("browser does not support web storage...");
        }
    }

    static remove(key) {
        if (typeof (Storage) !== "undefined") {
            localStorage.removeItem(key);
        } else {
            console.log("browser does not support web storage...");
        }
    }

    static findOne(key) {
        if (typeof (Storage) !== "undefined") {
            return localStorage.getItem(key);
        } else {
            console.log("browser does not support web storage...");
        }
    }

    static findKeys() {
        if (typeof (Storage) !== "undefined") {
            return Object.keys(localStorage);
        } else {
            console.log("browser does not support web storage...");
        }
    }
}