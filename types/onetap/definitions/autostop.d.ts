/**
 * Allows scripts to change the internal functioning of the Autostop feature.
 * @see {@link https://www.onetap.com/scripting/categories/25/ | Official Onetap Documentation}
 */
declare namespace Autostop {
    /**
     * Forces autostop retreating.
     * @see {@link https://www.onetap.com/resources/243/ | Official Onetap Documentation}
     */
    function ForceRetreat(): void;

    /**
     * @returns The state of retreating.
     * @see {@link https://www.onetap.com/resources/242/ | Official Onetap Documentation}
     */
    function IsRetreating(): boolean;

    /**
     * @returns The state of peeking.
     * @see {@link https://www.onetap.com/resources/241/ | Official Onetap Documentation}
     */
    function IsAutoPeeking(): boolean;
}

export default Autostop;

export default interface IAutostop {
    ForceRetreat: typeof Autostop.ForceRetreat;
    IsRetreating: typeof Autostop.IsRetreating;
    IsAutoPeeking: typeof Autostop.IsAutoPeeking;
}