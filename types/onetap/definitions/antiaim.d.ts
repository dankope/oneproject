/**
 * Allows scripts to alter the anti-aim of the cheat programmatically.
 * @see {@link https://www.onetap.com/scripting/categories/24/ | Official Onetap Documentation}
 */
declare namespace AntiAim {
    /**
     * @returns Whether or not the anti-aim is being overriden.
     * @see {@link https://www.onetap.com/resources/127/ | Official Onetap Documentation}
     */
    function GetOverride(): boolean;

    /**
     * Starts/stops overriding the anti-aim.
     * @param active Whether or not the override is active.
     * @see {@link https://www.onetap.com/resources/126/ | Official Onetap Documentation}
     */
    function SetOverride(active: number): void;

    /**
     * Overrides your real (body) offset.
     * @param offset The new offset.
     * @see {@link https://www.onetap.com/resources/129/ | Official Onetap Documentation}
     */
    function SetRealOffset(offset: number): void;

    /**
     * Overrides your fake (yaw) offset.
     * @param offset The new offset.
     * @see {@link https://www.onetap.com/resources/128/ | Official Onetap Documentation}
     */
    function SetFakeOffset(offset: number): void;

    /**
     * Overrides your LBY (desync) offset.
     * @param offset The new offset.
     * @see {@link https://www.onetap.com/resources/130/ | Official Onetap Documentation}
     */
    function SetLBYOffset(offset: number): void;
}

export default interface IAntiAim {
    GetOverride: typeof AntiAim.GetOverride;
    SetOverride: typeof AntiAim.SetOverride;
    SetRealOffset: typeof AntiAim.SetRealOffset;
    SetFakeOffset: typeof AntiAim.SetFakeOffset;
    SetLBYOffset: typeof AntiAim.SetLBYOffset;
}
