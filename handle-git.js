// import { exec } from 'node:child_process';
// import inquirer from 'inquirer';
// import util from 'util';

// const exe = util.promisify(exec);

// (async () => {
//     try {
//         const pull = await exe('git pull');
//         console.log('git pull');
//         console.log(pull.stdout);
//         const add = await exe('git add .');
//         console.log('git add .');
//         console.log(add.stdout);
//         const { commit } = await inquirer.prompt([{ type: 'input', message: 'enter commit', name: 'commit' }]);
//         const comm = await exe(`git commit -m "${commit}"`);
//         console.log(`git commit -m "${commit}"`);
//         console.log(comm.stdout);
//         const push = await exe(`git push`);
//         console.log('git push');
//         console.log(push.stdout || push.stderr);
//     }
//     catch (err) {
//         console.error(err.stdout || err.stderr || err);
//     }
// })();

const execSync = require('child_process').execSync;
const arg = process.argv;
let commit = '';

for (let i = 2; i < arg.length; i++) {
    const el = arg[i];
    commit += ' ' + el;
}

console.log(commit);

execSync(`git pull && git add . && git commit -m "${commit}" && git push`);