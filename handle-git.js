
const execSync = require('child_process').execSync;
const arg = process.argv;
let commit = '';

for (let i = 2; i < arg.length; i++) {
    const el = arg[i];
    commit += ' ' + el;
}

console.log(commit);

execSync(`git pull`);
execSync(`git add .`);
execSync(`git commit -m "${commit}" && git push`);
execSync(`git push`);