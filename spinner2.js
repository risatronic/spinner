const spinner = (string) => {
  let i = 0;

  function spin(){
    process.stdout.write(`\r${string[i]}`);
    if(i === string.length - 1){
      process.stdout.write('\n');
      clearInterval(timer);
    }
    i++;
  }
  spin(string);
  let timer = setInterval(spin, 200);
}

spinner('|/-\\|/-\\|');