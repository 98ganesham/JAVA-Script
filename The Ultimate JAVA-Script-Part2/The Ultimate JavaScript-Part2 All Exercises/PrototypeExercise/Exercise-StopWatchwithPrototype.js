function Stopwatch(){
    let startTime, endTime,running, duration = 0;
    
    Object.defineProperty(this,'duration',{
        get:function(){
            return duration;
        },
        set:function(value){
            duration = value;
        }
    });
    Object.defineProperty(this,'startTime',{
        get:function(){
            return startTime;
        }
    });
    Object.defineProperty(this,'endTime',{
        get:function(){
            return endTime;
        }
    });
    Object.defineProperty(this,'running',{
        get:function(){
            return running;
        }
    });
}
Stopwatch.prototype.start = function(){
    if(this.running)
    throw new Error('StopWatch has started already');
    this.running = true;
    this.startTime = new Date();
};
Stopwatch.prototype.stop = function(){
    if(!this.running)
    throw new Error('start StopWatch');
    this.running = false;
    this.endTime = new Date();
    const seconds = (endTime.getTime()-startTime.getTime()) /1000;
    this.duration += seconds;
};
Stopwatch.prototype.rest = function(){
    this.startTime = null;
    this.endTime = null;
    this. running = false;
    this.duration = 0;
};