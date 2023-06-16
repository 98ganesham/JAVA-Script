const __items=new WeakMap();
class Stack{
    constructor(){
        __items.set(this,[]);
    }
    push(obj){
        __items.get(this).push(obj);
    }
    pop(){
        const items = __items.get(this);
        if(items.length===0)
        throw new Error ('Stack is empty');
        return items.pop();
    }
    peek(){
        const items =__items.get(this);
        if(items.length ===0)
        throw new Error('Stack is empty');
        return items[items.length-1];
    }
    get count(){
        return __items.get(this).length;
    }
}