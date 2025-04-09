class Hero{
    public static headcount:number = 0;
    constructor(){
        Hero.headcount++;
    }
  public getcount():number{
    return Hero.headcount;
  }
}
// hey you dont need to make the instances to access the properties named after static
console.log(Hero.headcount);
