import { FrameStage } from "./shared";

/**
 * @see {@link https://www.onetap.com/scripting/categories/2/ | Official Onetap Documentation}
 */
declare namespace Globals {
    /**
     * @returns The amount of choked ticks.
     * @see {@link https://www.onetap.com/resources/180/ | Official Onetap Documentation}
     */
    function ChokedCommands(): number;

    /**
     * @returns The time, in seconds, since the game started.
     * @see {@link https://www.onetap.com/resources/64/ | Official Onetap Documentation}
     */
    function Realtime(): number;

    /**
     * @returns The time, in seconds, between the last and current frame.
     * @see {@link https://www.onetap.com/resources/63/ | Official Onetap Documentation}
     */
    function Frametime(): number;

    /**
     * @returns The time, in seconds, since the server started.
     * @see {@link https://www.onetap.com/resources/12/ | Official Onetap Documentation}
     */
    function Curtime(): number;

    /**
     * @returns The interval, in seconds, between each tick.
     * @see {@link https://www.onetap.com/resources/11/ | Official Onetap Documentation}
     */
    function TickInterval(): number;

    /**
     * @returns The server's amount of ticks a second, usually 64 or 128.
     * @see {@link https://www.onetap.com/resources/10/ | Official Onetap Documentation}
     */
    function Tickrate(): number;

    /**
     * @returns The time, in ticks, since the server started.
     * @see {@link https://www.onetap.com/resources/9/ | Official Onetap Documentation}
     */
    function Tickcount(): number;

    /**
     * @returns The current frame stage.
     * @see {@link https://www.onetap.com/resources/8/ | Official Onetap Documentation}
     */
    function FrameStage(): FrameStage;
}

export default interface IGlobals {
    ChokedCommands: typeof Globals.ChokedCommands;
    Realtime: typeof Globals.Realtime;
    Frametime: typeof Globals.Frametime;
    Curtime: typeof Globals.Curtime;
    TickInterval: typeof Globals.TickInterval;
    Tickrate: typeof Globals.Tickrate;
    Tickcount: typeof Globals.Tickcount;
    FrameStage: typeof Globals.FrameStage;
}