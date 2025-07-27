const height = 10;

for(let i = 1; i <= height; i++){
    const spaces = ' '.repeat(height - i)
    const hashes = '#'.repeat(2 * i - 1);
    console.log(spaces + hashes + spaces)
}


//second triangle
for (let i = 1; i <= 12; i++){
    console.log('#'.repeat(i))
}