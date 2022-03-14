interface IMainObject {
    value1: string;
    value2: string;
}
interface ICalculatedMainObject {
    value1: number;
    value3: string;
}

const mainObject:IMainObject = {
    value1: '3',
    value2: 'Explanation'
}

function mainToCalculatedObjectAdapter(mainObject:IMainObject):ICalculatedMainObject{
    return {
        value1: parseInt(mainObject.value1,10),
        value3: mainObject.value2 + ' transformed'
    }
}

console.log('Main object', mainObject)
console.log('Adapted object', mainToCalculatedObjectAdapter(mainObject))
