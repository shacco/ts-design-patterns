interface IUserObject {
    name: string;
    lastName: string;
    age:number;
    address?: IAddress;
    dni:string;
    sex?: string;
    nationality?:string;
}

type IUserObject1  = {
    name: string;
    lastName: string;
    age:number;
    address?: InstanceType<Address>;
    dni:string;
    sex?: string;
    nationality?:string;
}

interface IAddress{
    calle: string;
}


class Address implements IAddress{
    calle:'asd'
}

interface IUserTypescript extends IUserObject{
    show: Function;
}

class UserTypescript implements IUserTypescript {
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
