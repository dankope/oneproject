/**
 * Allows scripts to persist data through an on-disk key value database.
 * @see {@link https://www.onetap.com/scripting/categories/24/ | Official Onetap Documentation}
 */
declare namespace DataFile {
    /**
     * Saves all current cached keys/values to a specific file.
     * @param file The file's name
     * @see {@link https://www.onetap.com/resources/234/ | Official Onetap Documentation}
     */
    function Save(file: string): void;

    /**
     * Loads all keys/values from a specific file.
     * @param file The file's name
     * @see {@link https://www.onetap.com/resources/235/ | Official Onetap Documentation}
     */
    function Load(file: string): void;

    /**
     * Gets a value from a specific file.
     * @param file The file's name
     * @param key The key
     * @see {@link https://www.onetap.com/resources/237/ | Official Onetap Documentation}
     */
    function GetKey(file: string, key: string): string;

    /**
     * Assigns a value to a specific key in a specific file and caches it for saving.
     * @param file The file's name
     * @param key The key
     * @param value The value
     * @see {@link https://www.onetap.com/resources/236/ | Official Onetap Documentation}
     */
    function SetKey(file: string, key: string, value: string): void;

    /**
     * Erases a key in a datafile.
     * @param file The file's name
     * @param key The key to delete.
     * @see {@link https://www.onetap.com/resources/239/ | Official Onetap Documentation}
     */
    function EraseKey(file: string, key: string): void;
}

export default interface IDataFile {
    Save: typeof DataFile.Save;
    Load: typeof DataFile.Load;
    GetKey: typeof DataFile.GetKey;
    SetKey: typeof DataFile.SetKey;
    EraseKey: typeof DataFile.EraseKey;
}
