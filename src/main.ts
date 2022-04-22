import { exec } from 'child_process';
import { resolve as resolvePath } from 'path';

export async function getProjectRoot() {
    const promise = new Promise<string>((resolve, reject) => {
        exec('npm root --project', async (err, stdout, stderr) => {
            if (err) reject(err.message);
            else if (stderr) reject(err);
            else {
                const path = resolvePath(stdout, '..');

                resolve(path);
            }
        });
    });

    return promise;
}
