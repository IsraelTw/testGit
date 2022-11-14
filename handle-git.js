import { execSync, exec } from 'node:child_process';
import inquirer from 'inquirer';
import util from 'util';

const exe = util.promisify(exec);

(async () => {
    try {
        // await exe('git pull');
        // execSync('git add .');
        const add = await exe('git add .');
        console.log(add);
        const { commit } = await inquirer.prompt([{ type: 'input', message: 'enter commit', name: 'commit' }]);
        // execSync(`git commit -m "${commit}"`);
        const comm = await exe(`git commit -m "${commit}"`);
        console.log(comm);

        // execSync(`git push`);
        const push = await exe(`git push`);
        console.log(push);
    }
    catch (err) {
        console.error(err);
    }
})();