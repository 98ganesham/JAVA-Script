
console.log(stop);
function Stopwatch(){
    let startTime, endTime, running, duration =0;
    this.start  =function(){
        if(running)
        throw new Error('Stop Watch has already Started');
        running = true;
        startTime = new Date();
    };

    this.end = function(){
        if(!running )
            throw new Error('Stop Watch is not started');
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime()-startTime.getTime())/1000;
        duration+= seconds
        
    
    };
    this.rest = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
    Object.defineProperty(this,duration,{
          get:function(){return duration;}
    });
}