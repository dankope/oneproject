// TODO: make more specific types: i.e. Euler angle.

/**
 * An array of strings that represents a path to a menu element.
 */
export type MenuPath = string[];

/**
 * The index of an entity in the game world.
 */
export type EntityID = number;

/**
 * The index of a user in an event.
 */
export type UserID = number;

/**
 * An array containing three number corresponding to the X, Y and Z positions of a 3D point.
 * Or, alternatively, an array containing the pitch, yaw and roll of an Euler angle.
 */
export type Vector = number[];

/**
 * An enum listing each stage in a game "frame".
 */
export enum FrameStage {
    /** Identifies that frame has started. */
    FRAME_START = 0,
    /** Identifies that network packet has been received. */
    FRAME_NET_UPDATE_START,
    /** Identifies that packet's processing has started. */
    FRAME_NET_UPDATE_POSTDATAUPDATE_START,
    /** Identifies that packet's processing has ended. */
    FRAME_NET_UPDATE_POSTDATAUPDATE_END,
    /** Identifies that network packet has been processed. */
    FRAME_NET_UPDATE_END,
    /** Identifies that frame's rendering has started. */
    FRAME_RENDER_START,
    /** Identifies that frame's rendering has ended. */
    FRAME_RENDER_END
}

/**
 * An enum listing each hitbox index.
 */
export enum HitboxIndex {
    HEAD = 0,
    NECK,
    PELVIS,
    BODY,
    THORAX,
    CHEST,
    UPPER_CHEST,
    RIGHT_THIGH,
    LEFT_CALF,
    RIGHT_CALF,
    LEFT_FOOT,
    RIGHT_FOOT,
    LEFT_HAND,
    RIGHT_HAND,
    LEFT_UPPER_ARM,
    LEFT_FOREARM,
    RIGHT_UPPER_ARM,
    RIGHT_FOREARM,
}

/**
 * An enum listing each animation layer index.
 * @todo Comment enum items.
 */
export enum AnimationLayerIndex {
    AIMMATRIX = 0,
    WEAPON_ACTION,
    WEAPON_ACTION_RECROUCH,
    ADJUST,
    MOVEMENT_JUMP_OR_FALL,
    MOVEMENT_LAND_OR_CLIMB,
    MOVEMENT_MOVE,
    MOVEMENT_STRAFECHANGE,
    WHOLE_BODY,
    FLASHED,
    FLINCH,
    ALIVELOOP,
    LEAN
}

export interface AnimationLayer {
    Sequence: number;
    Activity: number;
    Weight: number;
    WeightDeltaRange: number;
    Cycle: number;
    PlaybackRate: number;
}
