import { expect } from 'chai';
import { getProjectRoot } from './main'

describe('getProjectRoot()', () => {
    it('returns path to project directory', async () => {
        const path = await getProjectRoot();

        expect(path.endsWith('npm-project-root')).is.true;
    })
})