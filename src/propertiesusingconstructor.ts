class what{
    constructor(public whatis:string , public whatare:string){}
}
// this is eqaul to 

class what2{
    public whatis:string = "cjbd";
    public whatare:string ="chdb";
    constructor(whatiss:string,whatares:string){
        this.whatis=whatiss;
        this.whatare=whatares;
    }
}
const newins = new what2("galaxy","blackhole")