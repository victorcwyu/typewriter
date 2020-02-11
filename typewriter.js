let sentence = "hello there from lighthouse labs"
sentence += "\n";
let timer = 50;

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer)
  timer += 50;
};

