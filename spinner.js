let spinners = ["|", "/", "-", "\\"];

let charPrint = (char, delay) => {
  setTimeout(() => {
    process.stdout.write(`\r ${char}   `);
  }, delay);
};

for (let i = 0; i < 10; i++) {
  charPrint(spinners[i % 4], i * 300);
}

// ... fill in the rest yourself ...
