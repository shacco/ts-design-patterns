/* The products have to be constructed with the same parameters*/
interface ICar {
    color: string;
    show: Function;
}
interface ITruck extends ICar{
    lift: Function;
}
interface IConvertible extends ICar{
    removeHud: Function;
    hud: string;
}

class Truck implements ITruck{
    color:string;
    maxLift = 0;
    constructor(color: string) {
        this.color = color;
    }
    show(){
        return `I'm a ${this.color} truck`
    }
    lift(){
        return `I'm lifting under ${this.maxLift}`
    }
    setMaxLift(maxLift:number){
        this.maxLift = maxLift;
    }

}
class Convertible implements IConvertible{
    color;
    hud ='A hood'
    constructor(color:string) {
        this.color = color;
    }
    show(){
        return `I'm a ${this.color} truck`
    }
    removeHud(){
        this.hud = '';
    }
}



/*
* The factory clases, it has to be abstract to force the childs to implement the method
* with the correct parameters and returning types. You wont be able to do this with and interface
*/
abstract class CarFactory{
    abstract createCar(color: string):ICar;
}


class TruckFactory extends CarFactory{
    createCar(color:string) {
        const truck = new Truck('red');
        truck.setMaxLift(25);
        return truck
    }
}
class ConvertibleFactory extends CarFactory{
    createCar(color:string) {
        const convertible = new Convertible('white');
        return convertible;
    }
}
/* End of the pattern */



/* Using the factory method (This is not part of the pateern, It's just of how to use it in practice )*/
interface IWishList  {
    type:string;
    color:string;
}
// A list of desired cars to build
const wishList: Array<IWishList> = [
    { type:'truck', color: 'red' },
    { type:'convertible', color: 'green' },
    { type:'truck', color: 'white' },
    { type:'convertible', color: 'red' },
    { type:'truck', color: 'blue' }
]
// This is a list of factories to avoid using if
const carFactories:any = {
    'truck': new TruckFactory(), //Singleton
    'convertible': new ConvertibleFactory()  //Singleton
}
//building the cars
const cars = wishList.map(listItem=>{
    return carFactories[listItem.type].createCar(listItem.color)
})

console.log(cars)
