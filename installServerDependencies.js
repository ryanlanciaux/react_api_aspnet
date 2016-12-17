const cp = require('child_process');

// for api
const opts = { stdio: 'inherit', cwd: 'api', shell: true };
cp.spawn('dotnet', ['restore'], opts);
