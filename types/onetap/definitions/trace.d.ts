import { EntityID, Vector } from "./shared";

/**
 * @see {@link https://www.onetap.com/scripting/categories/9/ | Official Onetap Documentation}
 */
declare namespace Trace {
    /**
     * Traces a line from a point to another and returns its data.
     * @param skip_entity The entity to be ignored
     * @param from The initial position
     * @param to The ending position
     * @returns The entity index of a hit entity or undefined, the fraction of the trace ('0' means it hit immediately, '1' means it went fully through).
     * @see {@link https://www.onetap.com/resources/78/ | Official Onetap Documentation}
     */
    function Line(skip_entity: EntityID, from: Vector, to: Vector): number[];

    /**
     * Traces a bullet from a point to another and returns its data.
     * @param attacker The entity who attacked
     * @param victim The enttiy who should be hit
     * @param from The initial position
     * @param to The ending position
     * @returns The entity index of a hit entity or undefined, the damage dealt, whether or not the ending position is visible and the hitbox that was hit.
     * @see {@link https://www.onetap.com/resources/79/ | Official Onetap Documentation}
     */
    function Bullet(attacker: EntityID, victim: EntityID, from: Vector, to: Vector): number[];

    /**
     * Traces a line from a point to another with a custom mask and returns its data. For advanced users only.
     * @param skip_entity The entity to be ignored
     * @param from The initial position
     * @param to The ending position
     * @param mask The custom mask
     * @param type The type. '0' will trace everything, '1' will trace only the world and '2' will trace only the entities.
     * @returns The entity index of a hit entity or undefined, the fraction of the trace ('0' means it hit immediately, '1' means it went fully through).
     * @see {@link https://www.onetap.com/resources/187/ | Official Onetap Documentation}
     */
    function RawLine(skip_entity: EntityID, from: Vector, to: Vector, mask: number, type: number): number[];

    /**
     * @returns Whether or not a line goes through a smoke. Breaks if smoke is removed.
     * @param from The initial position
     * @param to The ending position
     * @see {@link https://www.onetap.com/resources/179/ | Official Onetap Documentation}
     */
    function Smoke(from: Vector, to: Vector): number;
}

export default interface ITrace {
    Line: typeof Trace.Line;
    Bullet: typeof Trace.Bullet;
    RawLine: typeof Trace.RawLine;
    Smoke: typeof Trace.Smoke;
}

