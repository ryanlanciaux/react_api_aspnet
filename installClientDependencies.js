const cp = require('child_process');

// for api
const opts = { stdio: 'inherit', cwd: 'client', shell: true };
cp.spawn('npm', ['install'], opts);
