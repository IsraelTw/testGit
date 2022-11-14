import { execSync, exec } from 'node:child_process';
import inquirer from 'inquirer';
import util from 'util';

const exe = util.promisify(exec);

(async () => {
    try {
        // await exe('git pull');
        // execSync('git add .');
        await exe('git add .');
        const { commit } = await inquirer.prompt([{ type: 'input', message: 'enter commit', name: 'commit' }]);
        console.log(commit);
        // execSync(`git commit -m "${commit}"`);
        await exe(`git commit -m "${commit}"`);
        // execSync(`git push`);
        await exe(`git push`);
    }
    catch (err) {
        console.error(err);
    }
})();