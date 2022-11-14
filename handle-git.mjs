import { exec } from 'node:child_process';
import inquirer from 'inquirer';
import util from 'util';

const exe = util.promisify(exec);

(async () => {
    try {
        const add = await exe('git add .');
        console.log(add.stdout);
        const { commit } = await inquirer.prompt([{ type: 'input', message: 'enter commit', name: 'commit' }]);
        const comm = await exe(`git commit -m "${commit}"`);
        console.log(comm.stdout);
        const push = await exe(`git push`);
        console.log(push.stdout);
    }
    catch (err) {
        console.error(err.stdout || err.stderr || err);
    }
})();