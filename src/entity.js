
class Entity{
    constructor(name,height){
        this.name = name;
        this.height = height
    }

    greet(){
        console.log(`Hi this is ${this.name} from Earth`);
    }
}


export default Entity