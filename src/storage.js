// TODO: jsdoc comment everything

class Storage {
    constructor(fileName, format) {
        this.fileName = fileName;
        this.formatter = format;
        this.data = this.formatter.coerceData("");
    }

    load() {
        DataFile.Load(this.fileName);
        const length = DataFile.GetKey(this.fileName, "length");
        // If length does not exist, skip.
        if (length) {
            let rawData = "";
            for (let index = 0; index < length; index++) {
                rawData.concat(DataFile.GetKey(this.fileName, index.toString()));
            }
            this.data = this.formatter.coerceData(rawData);
        }
    }

    save() {
        // Erase leftovers
        const length = DataFile.GetKey(this.fileName, "length");
        // If length does not exist, skip erasing leftovers.
        if (length) {
            for (let index = 0; index < length; index++) {
                DataFile.EraseKey(this.fileName, index.toString());
            }
        }

        // Set our new data & save file.
        const rawData = this.formatter.coerceRaw(this.data);
        let index = 0;
        for (index; index <= rawData.length / 255; index++) {
            DataFile.SetKey(this.fileName, index.toString(), rawData.substr(index * 255, 255));
        }

        // Set our new key length.
        DataFile.SetKey(this.fileName, "length", index.toString());
        DataFile.Save(this.fileName);
    }
}

export { Storage };