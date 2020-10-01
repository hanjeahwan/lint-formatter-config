const rimraf = require('rimraf');
const fs = require('fs');
const path = require('path');

const packages = [
  'tslint',
  'tslint-angular',
  'stylelint',
  'commitlint',
  'prettier',
]

const root = process.cwd();

packages.forEach(package => {
  let targetPath = path.join(root, `packages/${package}/node_modules`);

  if (fs.existsSync(targetPath)) {
    rimraf.sync(targetPath);
  }
})

