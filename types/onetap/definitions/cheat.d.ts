/**
 * @see {@link https://www.onetap.com/scripting/categories/13/ | Official Onetap Documentation}
 */
declare namespace Cheat {
    /**
     * Prints a message to the console.
     * @param msg The message
     * @see {@link https://www.onetap.com/resources/3/ | Official Onetap Documentation}
     */
    function Print(msg: string): void;

    /**
     * Prints a log message like native onetap logs.
     * @param msg The message
     * @param color The color the log message should be printed as.
     * @see {@link https://www.onetap.com/resources/240/ | Official Onetap Documentation}
     */
    function PrintLog(msg: string, color: number[]): void;

    /**
     * Prints a colored message to the console.
     * @param color The color
     * @param msg The message
     * @see {@link https://www.onetap.com/resources/4/ | Official Onetap Documentation}
     */
    function PrintColor(color: number[], msg: string): void;

    /**
     * Prints a message to the in-game chat. Client-sided.
     * @param msg The message
     * @see {@link https://www.onetap.com/resources/85/ | Official Onetap Documentation}
     */
    function PrintChat(msg: string): void;

    /**
     * Executes a console command.
     * @param cmd The command
     * @see {@link https://www.onetap.com/resources/5/ | Official Onetap Documentation}
     */
    function ExecuteCommand(cmd: string): void;

    /**
     * Register a new callback
     * @param callback The callback's name
     * @param fun The function's name
     * @see {@link https://www.onetap.com/resources/6/ | Official Onetap Documentation}
     */
    function RegisterCallback(callback: string, fun: string): void;

    /**
     * @returns The user's name.
     * @see {@link https://www.onetap.com/resources/101/ | Official Onetap Documentation}
     */
    function GetUsername(): string;

    /**
     * @returns Whether or not the Legit tab has a configuration for the specified item ID.
     * @param item_id The weapon's item index.
     * @example Cheat.IsLegitConfigActive( Entity.GetProp( weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex" ) & 0xFFFF );
     * @see {@link https://www.onetap.com/resources/216/ | Official Onetap Documentation}
     */
    function IsLegitConfigActive(item_id: number): boolean;

    /**
     * @returns Whether or not the Rage tab has a configuration for the specified item ID.
     * @param item_id The weapon's item index.
     * @example Cheat.IsRageConfigActive( Entity.GetProp( weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex" ) & 0xFFFF );
     * @see {@link https://www.onetap.com/resources/215/ | Official Onetap Documentation}
     */
    function IsRageConfigActive(item_id: number): boolean;
}

export default interface ICheat {
    Print: typeof Cheat.Print;
    PrintLog: typeof Cheat.PrintLog;
    PrintColor: typeof Cheat.PrintColor;
    PrintChat: typeof Cheat.PrintChat;
    ExecuteCommand: typeof Cheat.ExecuteCommand;
    RegisterCallback: typeof Cheat.RegisterCallback;
    GetUsername: typeof Cheat.GetUsername;
    IsLegitConfigActive: typeof Cheat.IsLegitConfigActive;
    IsRageConfigActive: typeof Cheat.IsRageConfigActive;
}
