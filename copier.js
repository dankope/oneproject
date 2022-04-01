"use strict";

import * as fs from 'fs';
import * as regedit from 'regedit';

const location = 'HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Steam App 730';
let file = process.argv.slice(2)[0]; // The file to copy
let newFile = process.argv.slice(2)[1]; // The new files name

regedit.list([location], function (err, data) {
    let directory = data[location].values.InstallLocation.value;
    if (directory) {
        fs.copyFile(file, directory + "\\ot\\scripts\\" + newFile, (err) => {
            if (err) throw err;
            console.log(file + ' was copied to script folder as ' + newFile);
        });
    }
});