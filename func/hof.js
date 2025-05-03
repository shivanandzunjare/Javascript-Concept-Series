function multiplier(x){
    return function(y){
        return y * x;
    }
}

const double = multiplier(2);
console.log(double(5))