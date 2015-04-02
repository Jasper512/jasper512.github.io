var gift=prompt("You have been in the prison for about 2 months, suddenly, one of the guards gave a gift to you, mentioning that it was from a relative. What is the gift? A BAZOOKA, a TELEPORTATION DEVICE, a ROBOT, or the MJOLNIR?").toUpperCase();

switch(gift){
    case 'BAZOOKA':
        var shoot=prompt("WOW! A BAZOOKA!Where are you going to fire it (BARS or WINDOW?)").toUpperCase();    
    break;
  
    
    case 'MJOLNIR':
        alert("Cool the MJOLNIR, the hammer of Thor. You will need to be worthy enough to weild it. To weild it, press Enter");   
        alert("You idiot, you're a prisoner. How can you be worthy.");
    break;//close mjolnir case
    
    
  case 'TELEPORTATION DEVICE':
        alert("Nice! You used the device and teleport, unfortuately you teleport to right outside the prison, and you fall to your death. You failed");
    break;//close teleport case
    
    
  case 'ROBOT':
        var guard=prompt("The high tech robot that was built in Japan. It helped you pick the lock, a guard comes right around the corner, what will you do(ROBOT SHOOT or KICK)??").toUpperCase();
            
    switch(guard){
              case ('SHOOT'):
                var route=prompt("The guard is down. You advance but then see a couple of guards blocking the door way. Should you go into the vents or allow the robot to take them down?(VENT or ATTACK)").toUpperCase();
                      switch(route){
                        case ('ATTACK'):
                          alert("The guards are down. You are free to live another day. There will be people on your tail. The rest is up to you.");
                        break;

                        case ('VENT'):
                          alert("You crawl up the vents, but then the lasers were tured on. You have been captured and sent back to prison. You lose.");
                        break;
                        }//case second switch
               break; //case shoot case
        
            case ('KICK'):
                alert("The guard shot you before you could make your move. You lose.");
                break;//case kick end
                
   }
              
  break; //close robot case
            

   
}//switch is ended




if (shoot=='WINDOW') {
   alert("You only got one round and you blew a hole in the window. How are you gonna get down there, smart guy?");}

if(shoot=='BARS') {
          var attack=prompt("You got out of your cell, but wait, a uard approaches. Should you KICK him or throw the BAZOOKA at him(KICK or THROW)?").toUpperCase();
          switch(attack){
            case 'KICK':
              alert("the guard shot you before you could attack him, you lose");
              break; //end case kick
              
            case 'THROW':
              var item=prompt("the guard  is out cold, he has a gun, a tazer and a uniform. Whihone will you upick up?(GUN or TAZER or UNIFORM)").toUpperCase();
              break;} //end case throw
  
            switch(item){
              case 'GUN':
                alert("you could now kill those who stop you from escaping the prison, you win!!");
                break;//case gun end
              case 'TAZER':
                alert("another guard approaches to find out what was going on. He pulls out his gun and your tazer is useless.");//case tazer end
                break;
              case 'UNIFORM':
                alert("you walk out of the prison in a disguise, no one knows who you are, you are free but on the lose, the rest is up to you.");//case uniform end
                break;//close bazooka case

}
} 
