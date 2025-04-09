// class GetterSetter{
//     constructor(private name:string ,private _age:number,private hobbies:string[]){}

//     public set age(age:number){
//        if(age>100 || age<0){
//         throw new Error("Enter valid age")
//        }
//        else {
//         this._age = age
//        }
//     }

//     public get age(){
//         if(this._age ===  undefined){
//            throw new Error("age is not undefined")
//         }
//         return this._age
//     }
    
//     public giveintro():string{
//         return `Hey my name is ${this.name} , my age is ${this.age} and my hobbies are ${this.hobbies.join(",")} and more`
//     }
// }
// const selfintro = new GetterSetter("anand",34,["developmet","programming"]);
// console.log(selfintro.giveintro());
// selfintro.age  = 56
// console.log(selfintro.age);


class BankAccount{
    private _balance:number = 0
    constructor(public Username:string , public AccountNumber:number){}
    public set balance(value:number){
        if(value<0){
            throw new Error("Deposit some money")
        }
        else{
            this._balance = value;
        }
    }
    public get balance():number{
        if(this._balance == undefined){
            throw new Error("Your account is empty")
        }
      return this._balance;}
    
    public AccountDetails():string{
                return `Hello User! your name is ${this.Username} , Your Accountnumber is ${this.AccountNumber} and you have deposited ${this._balance}`
      }
}

const DepositMoney = new BankAccount("Mike",93274873481479213749);;
DepositMoney.balance = 1000
console.log(DepositMoney.balance);
console.log(DepositMoney.AccountDetails());

