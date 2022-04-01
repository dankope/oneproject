// TODO: parse and load actual datafiles

export default {
    files: {
        "ExampleFile": {
            key: "value"
        }
    },

    Save(file) { },

    Load(file) { },

    GetKey(file, key) {
        return this.files[file][key];
    },

    SetKey(file, key, value) {
        this.files[file][key] = value;
    },

    EraseKey(file, key) {
        this.files[file][key] = null;
    },
}