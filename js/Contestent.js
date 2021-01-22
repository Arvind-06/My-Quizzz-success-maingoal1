class Contestant {
    constructor(){
      this.index=null;
      this.name=null;
      this.answer=0;
    }
  
    getCount(){
      var constestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      });
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(name){
      var contestantIndex = "contestants/contestant" + contestantCount;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer,
      });
    }
  
    static getPlayerInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      });
    } 
  }
  