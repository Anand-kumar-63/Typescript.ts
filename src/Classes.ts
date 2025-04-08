
class infra {
    Road: string = "vinod road lt";
    city: string = "Gonda";
    watertank: string = "Gonda watertank";
  
    constructor(Roads: string, citys: string, watertanks: string) {
      this.Road = Roads;
      this.city = citys;
      this.watertank = watertanks;
    }
  }
  
  const infra1: infra = new infra("anand lmt", "Lucknow", "lucknow watertank");
  console.log(infra1);
  