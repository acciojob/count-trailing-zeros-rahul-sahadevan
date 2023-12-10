function trailingZeros(n) {
	let count =0;
  
  let fact = 1;
  
  for(let i =1;i<=n;i++){
    fact *= i;
  }
  let i =0
  
  while(fact > 0){
    let rem = fact % 10;
    if(rem > 0){
      return count;
    }
    else{
      count++;
    }
    
    fact = fact / 10;
    i++;
  }
	
}

const input = prompt("Enter a number");
alert(trailingZeros(input));

