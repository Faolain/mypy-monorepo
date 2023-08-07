// eslint-disable-next-line no-console
const fs = require("fs");
const huskyHookLoc = "../../.git/hooks/husky.local.sh";

if (fs.existsSync(huskyHookLoc)) {
  fs.readFile(huskyHookLoc, "utf-8", (err, data) => {
    if (err) throw err;
    const newData = data.replace(/cd.*$/gim, 'cd "."');
    fs.writeFile(huskyHookLoc, newData, "utf-8", (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      process.exit(0);
    });
  });
}

// process.exit(0);
