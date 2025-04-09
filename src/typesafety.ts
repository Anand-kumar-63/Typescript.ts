const favplayers = (players :string | string[])=>
{
    if(typeof players === 'object' || Array.isArray(players) )
    {
          players.map((player)=>{console.log(player)})
    }
    else{
        return `this is the only player i like : ${players}`
    }
}
favplayers(["Ronaldo","Mausi"]);
console.log(favplayers("virat kolhi"))