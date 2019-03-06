//practicing memoization function
function memoize(fn){
  const cache = {};
  return function (...args){
    if(cache[args]){
      return cache[args];
    }

    const results = fn.apply(this,args);
    cache[args] = results;

    return results;
  };
}

function slowfib(n) {
  if(n < 2){
    return n;
  }
  else{
    return fib(n -1) + fib(n-2);
  }
}

const fib = memoize(slowfib);

module.exports = fib;


//EOF
