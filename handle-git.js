import { execSync } from 'node:child_process';
import inquirer from 'inquirer';

(async () => {
    try {
        // await exe('git pull');
        execSync('git add .');
        const { commit } = await inquirer.prompt([{ type: 'input', message: 'enter commit', name: 'commit' }]);
        console.log(commit);
        execSync(`git commit -m ${commit.toString()}`);
        execSync(`git push`);
    }
    catch (err) {
        console.error(err);
    }
})();