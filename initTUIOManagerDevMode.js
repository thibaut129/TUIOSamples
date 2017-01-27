const exec = require('child_process').exec;
const fs = require('fs');

const nodeModulesDir = './node_modules';

if (!fs.existsSync(nodeModulesDir)) {
  fs.mkdirSync(nodeModulesDir);
}

const puts = function(error, stdout, stderr) {
    if (error) {
        console.error(error);
    }
};

exec('sudo npm link tuiomanager', puts);

fs.symlinkSync('./node_modules/tuiomanager', './tuiomanager');
