import { EntityID } from "./shared";

/**
 * Allows scripts to tune the ragebot programmatically.
 * @see {@link https://www.onetap.com/scripting/categories/19/ | Official Onetap Documentation}
 */
declare namespace Ragebot {
    /**
     * @returns The current ragebot target. This only returns an entity right before shooting, so most of the
     * time it'll just return undefined.
     * @see {@link https://www.onetap.com/resources/167/ | Official Onetap Documentation}
     */
    function GetTarget(): EntityID;

    /**
     * @returns An array containing all possible ragebot targets.
     * @see {@link https://www.onetap.com/resources/217/ | Official Onetap Documentation}
     */
    function GetTargets(): EntityID[];

    /**
     * @returns The hitchance of the ragebot's target.
     * @see {@link https://www.onetap.com/resources/218/ | Official Onetap Documentation}
     */
    function GetTargetHitchance(): number;

    /**
     * Forces the ragebot to prioritize a certain player.
     * @param index The entity's index
     * @see {@link https://www.onetap.com/resources/169/ | Official Onetap Documentation}
     */
    function ForceTarget(index: EntityID): void;

    /**
     * Forces the ragebot to ignore a player.
     * @param index The entity's index
     * @see {@link https://www.onetap.com/resources/174/ | Official Onetap Documentation}
     */
    function IgnoreTarget(index: EntityID): void;

    /**
     * Forces the ragebot to ignore a hitbox on a specific player.
     * @param index The entity's index
     * @param hitbox The hitbox's index
     * @see {@link https://www.onetap.com/resources/219/ | Official Onetap Documentation}
     */
    function IgnoreTargetHitbox(index: EntityID, hitbox: number): void;

    /**
     * Forces the ragebot to target only safe points on a player.
     * @param index The entity's index
     * @see {@link https://www.onetap.com/resources/170/ | Official Onetap Documentation}
     */
    function ForceTargetSafety(index: EntityID): void;

    /**
     * Forces the ragebot to target a player for a certain hitchance.
     * @param index The entity's index
     * @param hitchance The new hitchance
     * @see {@link https://www.onetap.com/resources/171/ | Official Onetap Documentation}
     */
    function ForceTargetHitchance(index: EntityID, hitchance: number): void;

    /**
     * Forces the ragebot to target a player for a certain min. damage.
     * @param index The entity's index
     * @param dmg The new min. damage
     * @see {@link https://www.onetap.com/resources/172/ | Official Onetap Documentation}
     */
    function ForceTargetMinimumDamage(index: EntityID, dmg: number): void;

    /**
     * Forces the ragebot to target only safe points for a specific hitbox.
     * @param hitbox The hitbox's index
     * @see {@link https://www.onetap.com/resources/173/ | Official Onetap Documentation}
     */
    function ForceHitboxSafety(hitbox: number): void;
}

export default interface IRagebot {
    GetTarget: typeof Ragebot.GetTarget;
    GetTargets: typeof Ragebot.GetTargets;
    GetTargetHitchance: typeof Ragebot.GetTargetHitchance;
    ForceTarget: typeof Ragebot.ForceTarget;
    IgnoreTarget: typeof Ragebot.IgnoreTarget;
    IgnoreTargetHitbox: typeof Ragebot.IgnoreTargetHitbox;
    ForceTargetSafety: typeof Ragebot.ForceTargetSafety;
    ForceTargetHitchance: typeof Ragebot.ForceTargetHitchance;
    ForceTargetMinimumDamage: typeof Ragebot.ForceTargetMinimumDamage;
    ForceHitboxSafety: typeof Ragebot.ForceHitboxSafety;
}
