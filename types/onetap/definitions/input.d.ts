/**
 * @see {@link https://www.onetap.com/scripting/categories/14/ | Official Onetap Documentation}
 */
declare namespace Input {
    /**
     * @returns Whether or not a key is being held.
     * @param vkey_code The virtual-key code.
     * @see {@link https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes| List of VK codes}
     * @see {@link https://www.onetap.com/resources/7/ | Official Onetap Documentation}
     */
    function IsKeyPressed(vkey_code: number): boolean;

    /**
     * @returns The X and Y positions of the cursor.
     * @see {@link https://www.onetap.com/resources/59/ | Official Onetap Documentation}
     */
    function GetCursorPosition(): number[];

    /**
     * Toggles the visibility of the cursor.
     * @param visible Whether or not it is visible.
     * @see {@link https://www.onetap.com/resources/208/ | Official Onetap Documentation}
     */
    function ForceCursor(visible: number): void;

    /**
     * @returns Whether or not the csgo console is open.
     * @see {@link https://www.onetap.com/resources/251/ | Official Onetap Documentation}
     */
    function IsConsoleOpen(): boolean;

    /**
     * @returns Whether or not the csgo chat window is open.
     * @see {@link https://www.onetap.com/resources/250/ | Official Onetap Documentation}
     */
    function IsChatOpen(): boolean;

    /**
     * @returns Scrollwheel value, positive if up, negative if down.
     */
    function GetScrollState(): number;
}

export default interface IInput {
    IsKeyPressed: typeof Input.IsKeyPressed;
    GetCursorPosition: typeof Input.GetCursorPosition;
    ForceCursor: typeof Input.ForceCursor;
    IsConsoleOpen: typeof Input.IsConsoleOpen;
    IsChatOpen: typeof Input.IsChatOpen;
    GetScrollState: typeof Input.GetScrollState;
}

