for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    process.stdout.write("\r|   ");
  }, 100 + i * 100);

  setTimeout(() => {
    process.stdout.write("\r/   ");
  }, 200 + i * 100);

  setTimeout(() => {
    process.stdout.write("\r-   ");
  }, 300 + i * 100);

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write("\r\\   ");
  }, 400 + i * 100);
}
// ... fill in the rest yourself ...
