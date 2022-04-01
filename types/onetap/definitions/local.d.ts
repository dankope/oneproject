import { Vector, EntityID } from "./shared";

/**
 * @see {@link https://www.onetap.com/scripting/categories/12/ | Official Onetap Documentation}
 */
declare namespace Local {
    /**
     * @returns your latency/ping in seconds.
     * @see {@link https://www.onetap.com/resources/13/ | Official Onetap Documentation}
     */
    function Latency(): number;

    /**
     * @returns a vector containing your pitch, yaw and roll.
     * @see {@link https://www.onetap.com/resources/15/ | Official Onetap Documentation}
     */
    function GetViewAngles(): Vector;

    /**
     * @returns a vector containing your camera's pitch, yaw and roll.
     * @see {@link https://www.onetap.com/resources/223/ | Official Onetap Documentation}
     */
    function GetCameraAngles(): Vector;

    /**
     * @returns a vector containing your camera's X, Y and Z positions.
     * @see {@link https://www.onetap.com/resources/222/ | Official Onetap Documentation}
     */
    function GetCameraPosition(): Vector;

    /**
     * @returns Whether or not the local player is dormant to an entity.
     * @see {@link https://www.onetap.com/resources/248/ | Official Onetap Documentation}
     */
    function IsDormantTo(index: EntityID): boolean;

    /**
     * Overrides your engine's view angles.
     * @param angles The new angles
     * @see {@link https://www.onetap.com/resources/15/ | Official Onetap Documentation}
     */
    function SetViewAngles(angles: Vector): void;

    /**
     * Overrides your camera's angles.
     * @param angles The new angles
     * @see {@link https://www.onetap.com/resources/221/ | Official Onetap Documentation}
     */
    function SetCameraAngles(angles: Vector): void;

    /**
     * Overrides your camera's position.
     * @param point The new position.
     * @see {@link https://www.onetap.com/resources/220/ | Official Onetap Documentation}
     */
    function SetCameraPosition(point: Vector): void;

    /**
     * Overrides your clan-tag.
     * @param tag The new clan-tag.
     * @see {@link https://www.onetap.com/resources/102/ | Official Onetap Documentation}
     */
    function SetClanTag(tag: string): void;

    /**
     * @returns your real anti-aim yaw.
     * @see {@link https://www.onetap.com/resources/104/ | Official Onetap Documentation}
     */
    function GetRealYaw(): number;

    /**
     * @returns your fake anti-aim yaw.
     * @see {@link https://www.onetap.com/resources/105/ | Official Onetap Documentation}
     */
    function GetFakeYaw(): number;

    /**
     * @returns your fake anti-aim yaw.
     * @see {@link https://www.onetap.com/resources/259/ | Official Onetap Documentation}
     */
    function GetMaxDesync(): number;

    /**
     * Gets your weapon's spread.
     * @see {@link https://www.onetap.com/resources/106/ | Official Onetap Documentation}
     */
    function GetSpread(): number;

    /**
     * Gets your weapon's inaccuracy.
     * @see {@link https://www.onetap.com/resources/107/ | Official Onetap Documentation}
     */
    function GetInaccuracy(): number;
}

export default interface ILocal {
    Latency: typeof Local.Latency;
    GetViewAngles: typeof Local.GetViewAngles;
    GetCameraAngles: typeof Local.GetCameraAngles;
    GetCameraPosition: typeof Local.GetCameraPosition;
    IsDormantTo: typeof Local.IsDormantTo;
    SetViewAngles: typeof Local.SetViewAngles;
    SetCameraAngles: typeof Local.SetCameraAngles;
    SetCameraPosition: typeof Local.SetCameraPosition;
    SetClanTag: typeof Local.SetClanTag;
    GetRealYaw: typeof Local.GetRealYaw;
    GetFakeYaw: typeof Local.GetFakeYaw;
    GetMaxDesync: typeof Local.GetMaxDesync;
    GetSpread: typeof Local.GetSpread;
    GetInaccuracy: typeof Local.GetInaccuracy;
}