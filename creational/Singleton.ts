/*Build the class however you wish*/
class Singleton {
    message: string;
    constructor(message) {
        this.message = message;
    }
}

/* Export an instance of the class, it will be in caché so the object won't be chanching */
export default new Singleton('lorem');
