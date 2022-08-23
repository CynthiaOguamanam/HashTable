class queue {
    constructor(){
    this.storage = {}
    this.tail =0
    this.head = 0
    }
}

enqueue(value){
    this.storage[this.tail] = valuethis.tail++
}

view(){
    return this.storage
}

dequeue(){00000
    let removed = this.storage[this.head]
    delete this.storage[this.head]
    this.head++

    return removed;
}