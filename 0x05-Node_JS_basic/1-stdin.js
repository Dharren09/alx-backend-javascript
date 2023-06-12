/**
 * program is executed through command-line
 * displays a message followed by a new line
 * the user is able to input their name on anew line
 * the programs ends, a message is printed
 */

process.stdin.setEncoding('utf8');
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const entry = process.stdin.read();
  if (entry !== null) {
    process.stdout.write(`Your name is: ${entry}`);
  }
});

if (!process.stdin.isTTY) {
  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
