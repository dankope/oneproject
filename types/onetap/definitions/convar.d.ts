/**
 * @see {@link https://www.onetap.com/scripting/categories/6/ | Official Onetap Documentation}
 */
declare namespace Convar {
    /**
     * Gets a CVar's value in integer form.
     * @param cvar The CVar.
     * @see {@link https://www.onetap.com/resources/53/ | Official Onetap Documentation}
     */
    function GetInt(cvar: string): number | boolean;

    /**
     * Gets a CVar's value in float form.
     * @param cvar The CVar.
     * @see {@link https://www.onetap.com/resources/55/ | Official Onetap Documentation}
     */
    function GetFloat(cvar: string): number | boolean;

    /**
     * Gets a CVar's value in string form.
     * @param cvar The CVar.
     * @see {@link https://www.onetap.com/resources/57/ | Official Onetap Documentation}
     */
    function GetString(cvar: string): string | boolean;

    /**
     * Overrides a CVar's value to a specified integer.
     * @param cvar The CVar.
     * @see {@link https://www.onetap.com/resources/54/ | Official Onetap Documentation}
     */
    function SetInt(cvar: string, value: number): void;

    /**
     * Overrides a CVar's value to a specified float.
     * @param cvar The CVar.
     * @see {@link https://www.onetap.com/resources/56/ | Official Onetap Documentation}
     */
    function SetFloat(cvar: string, value: number): void;

    /**
     * Overrides a CVar's value to a specified string.
     * @param cvar The CVar.
     * @see {@link https://www.onetap.com/resources/58/ | Official Onetap Documentation}
     */
    function SetString(cvar: string, value: string): void;
}

export default interface IConvar {
    GetInt: typeof Convar.GetInt;
    GetFloat: typeof Convar.GetFloat;
    GetString: typeof Convar.GetString;
    SetInt: typeof Convar.SetInt;
    SetFloat: typeof Convar.SetFloat;
    SetString: typeof Convar.SetString;
}