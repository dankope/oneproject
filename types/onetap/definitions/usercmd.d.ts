import { Vector } from "./shared";

/**
 * @see {@link https://www.onetap.com/scripting/categories/10/ | Official Onetap Documentation}
 */
declare namespace UserCMD {
    /**
     * @returns An array containing forward, sideways and up movement.
     * @see {@link https://www.onetap.com/resources/186/ | Official Onetap Documentation}
     */
    function GetMovement(): number[];

    /**
     * @returns a bit-mask of all buttons.
     * @see {@link https://www.onetap.com/resources/181/ | Official Onetap Documentation}
     */
    function GetButtons(): number;

    /**
     * Overrides the UserCMD's movement.
     * @param values
     * @see {@link https://www.onetap.com/resources/89/ | Official Onetap Documentation}
     */
    function SetMovement(values: number[]): void;

    /**
     * Overrides the UserCMD's buttons.
     * @param buttons
     * @see {@link https://www.onetap.com/resources/182/ | Official Onetap Documentation}
     */
    function SetButtons(buttons: number): void;

    /**
     * Overrides your UserCMD's angles.
     * @param angles The new angles
     * @param silent Whether or not you should visualize those angles.
     * @see {@link https://www.onetap.com/resources/185/ | Official Onetap Documentation}
     */
    function SetViewAngles(angles: Vector, silent: boolean): void;

    /**
     * Overrides the mouse's X position.
     * @param x The new position.
     * @see {@link https://www.onetap.com/resources/231/ | Official Onetap Documentation}
     */
    function SetMouseX(x: number): void;

    /**
     * Overrides the mouse's Y position.
     * @param y The new position.
     * @see {@link https://www.onetap.com/resources/232/ | Official Onetap Documentation}
     */
    function SetMouseY(y: number): void;

    /**
     * Forces the cheat to choke a tick.
     * @see {@link https://www.onetap.com/resources/183/ | Official Onetap Documentation}
     */
    function Choke(): void;

    /**
     * Forces the cheat to send a tick.
     * @see {@link https://www.onetap.com/resources/184/ | Official Onetap Documentation}
     */
    function Send(): void;
}

export default interface IUserCMD {
    GetMovement: typeof UserCMD.GetMovement;
    GetButtons: typeof UserCMD.GetButtons;
    SetMovement: typeof UserCMD.SetMovement;
    SetButtons: typeof UserCMD.SetButtons;
    SetViewAngles: typeof UserCMD.SetViewAngles;
    SetMouseX: typeof UserCMD.SetMouseX;
    SetMouseY: typeof UserCMD.SetMouseY;
    Choke: typeof UserCMD.Choke;
    Send: typeof UserCMD.Send;
}
