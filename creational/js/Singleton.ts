class Singleton {
    msg: string;
    constructor(msg) {
        this.msg = msg;
    }
}

// Propuesta final. Desarrolla tu clase tranquilamente:
// Exporta un objeto creado
//Export además la clase para que puedas hacer test unitarios sobre ella
const exportObject = {
    Singleton: new Singleton('lorem'),
    SingletonClass: Singleton
}

export default exportObject;
