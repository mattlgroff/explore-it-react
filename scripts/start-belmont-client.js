const args = ["start"];
const opts = { stdio: "inherit", cwd: "belmont-client", shell: true };
require("child_process").spawn("npm", args, opts);
