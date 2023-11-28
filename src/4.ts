class Key {
  private signature: number=Math.random();
  getSignature():number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {
  }
  getKey():Key {
    return this.key;
  }
}
abstract class House {
  public door: boolean=false;
  public tenants:Person[]=[];
  constructor( public keyHouse: Key) {}
 
  comeIn(person:Person):void{
    if(this.door && !this.tenants.includes(person)){
        this.tenants.push(person);
        console.log(`Welcome home, ${person.getKey().getSignature()}!`);
    } else {
        alert('The door is closed.');
    }
  }
  abstract openDoor(key:Key):void;
}

class MyHouse extends House {
    openDoor(key: Key):void {
        if(key.getSignature()===this.keyHouse.getSignature()){
            this.door = true;
            alert('The door is open');
        } else {
            alert('The key does not fit the lock');
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};