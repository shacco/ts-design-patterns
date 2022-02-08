interface IUserObject {
    name: string;
    lastName: string;
    age:number;
    address?: string;
    dni:string;
    sex?: string;
    nationality?:string;
}


class UserTypescript implements IUserObject {
    age: number;
    dni: string;
    lastName: string;
    name: string;
    address: string;
    sex: string;
    nationality: string;

    constructor(userObject: IUserObject) {
        this.name = userObject.name;
        this.lastName = userObject.lastName;
        this.age = userObject.age;
        this.address = userObject.address || 'Lives no where';
        this.dni = userObject.dni;
        this.sex = userObject.sex || "Don't wnat to say";
        this.nationality = userObject.nationality || 'Has no country';
    }

    show(){
        const {name, lastName, age, address, dni, sex, nationality} = this;
        console.log({name, lastName, age, address, dni, sex, nationality})
    }
}


export default UserTypescript;

/*Pass and object to the constructor, so you will be able to build it as you wish*/
