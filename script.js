function firstWord(s) {
  // your code here
	let trimS=s.trim();
	let ans="";
	for(let ch of trimS)
		{
			if(ch==" ")
				return ans;
			ans=ans+ch;
				
		}
	return ans;
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
