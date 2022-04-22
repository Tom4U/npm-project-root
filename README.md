# npm-project-root

## Installation
```
npm install --save-dev @tom4u/npm-project-root
```

---

## Description
Get the path to a Yarn or NPM based project root directory.

---

## Usage
```
import { getProjectRoot } from '@tom4u/npm-project-root';

getProjectRoot().then((rootDir: string) => { // do something here ... });
```