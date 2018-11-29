//Type your code in this function
function Tracker(){

  let seeds =[];
  let percent = [];

  //implement all six functions below
  function numOfSeeds(){
    let found = 0;
    for(let i=0; i<seeds.lengh; i++){
      if(list [i] !== null){
        found ++;
      }
    }
    return found;
  }





  function addSeed(s){
    seeds.push(s)
  }





  function removeSeed(name){
    let index= 0;
    for(let i = 0; i < seeds.length; i++){
      if(seeds[i] === name){
        
        seeds[i] =null;

        percent[i] = 0;
       }
    }
  }




  function reportHealth(){
    let sum=0
    let count =0;

    for(let i=0; i < percent.length; i++){
      if(percent[i] != 0){
        sum =sum + percent[i];
        count++;
      }
    }
    return sum/count;
  }




 function update(){
   for(let i = 0; i < seeds.length; i++){
     let r = Math.random()
     if(r > seeds[i]){
       seeds[i] = r;
      }
     else(r < 0.03);{
       seeds[i] = null;
       percent[i] = 0 ;
      }
    }
  }
   
}




