/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.stack = [];
    this.min = Number.MAX_SAFE_INTEGER;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.min > val) {
        this.min = val;
    }

    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popValue = this.stack.pop();

    if (popValue === this.min) {
        this.min = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < this.stack.length; ++i) {
            if (this.min > this.stack[i]) {
                this.min = this.stack[i];
            }
        }
    }

    return popValue;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */