import { Vector, EntityID } from "./shared";

export interface PredictedGrenadeHit {
    /** Entity index that is predicted to be hit. */
    EntityIndex: EntityID;
    /** Predicted damage the grenade will inflict on the entity. */
    Damage: number;
}

export interface PredictedGrenade {
    /** Indicates if the grenade is live. */
    IsLive: boolean;
    /** Entity index of the grenade's owner. */
    Owner: EntityID;
    /** Indicates the type of grenade (i.e. Molotov). */
    Type: string;
    /** Entity index of the grenade. */
    EntityIndex: EntityID;
    /** Predicted end point of the grenade. */
    Position: Vector;
    /** List of entities predicted to be hit by the grenade. */
    Hits: PredictedGrenadeHit[];
}

/**
 * Allows scripts to utilize the grenade prediction which the cheat uses to visualize grenades predicted trajectories.
 * @see {@link https://www.onetap.com/scripting/categories/26/ | Official Onetap Documentation}
 */
declare namespace GrenadePrediction {
    /**
     * @returns An array of predicted grenade objects, all of which are live.
     * @see {@link https://www.onetap.com/resources/247/ | Official Onetap Documentation}
     */
    function GetLiveGrenades(): PredictedGrenade[];

    /**
     * @returns The local players predicted grenade, returns undefined if none.
     * @see {@link https://www.onetap.com/resources/246/ | Official Onetap Documentation}
     */
    function GetPredictedGrenade(): PredictedGrenade | undefined;

    /**
     * Must be called every tick to remain active, you can call it in the draw thread,
     * there is no performance impact when calling it,
     * must be called in order for grenade prediction to predict (if the user has it disabled).
     * @see {@link https://www.onetap.com/resources/245/ | Official Onetap Documentation}
     */
    function Run(): void;
}

export default interface IGrenadePrediction {
    GetLiveGrenades: typeof GrenadePrediction.GetLiveGrenades;
    GetPredictedGrenade: typeof GrenadePrediction.GetPredictedGrenade;
    Run: typeof GrenadePrediction.Run;
}
