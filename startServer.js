const args = ['run'];
const opts = { stdio: 'inherit', cwd: 'api', shell: true };
require('child_process').spawn('dotnet', args, opts);
