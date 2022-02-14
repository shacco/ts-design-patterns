const {cloneDeep} = require('lodash');

/*
* Why does it exists:
* * * Preset of objects with a determined state as a new starting point.
* * * Remove the (potentially expensive) overhead of initializing an object
* */
interface IPrototype{
    clone: Function;
}

class Prototype implements IPrototype{
    variable:string;
    constructor(variable:string) {
        this.variable = variable;
    }

    getVariable():string{
        return this.variable;
    }
    setVariable(variable:string){
        this.variable = variable;
    }

    clone():this {
        /*
        * Fast cloning with data loss - JSON.parse(JSON.stringify(object))
        * Use it only, If you do not use Dates, functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas,
        * sparse Arrays, Typed Arrays or other complex types within your object.
        * */
        //return JSON.parse(JSON.stringify(this));


        /*
        * Not implemented yet, it wont copy the methods
        * */
        // @ts-ignore
        // return structuredClone(this)

        /*
        *  Be careful with this approach it will only copy the first level of the object
        * */
        // return {...this};

        /*
         * Lodash!!!
         */
         return cloneDeep(this);

    }
}

const prototypeObject = new Prototype('lorem');
console.log(prototypeObject);

const newObject = prototypeObject.clone();
newObject.setVariable('macu');
console.log(newObject)





