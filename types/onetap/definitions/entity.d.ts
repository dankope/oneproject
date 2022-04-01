import { AnimationLayer, AnimationLayerIndex, EntityID, HitboxIndex, UserID, Vector } from "./shared";

/**
 * @see {@link https://www.onetap.com/scripting/categories/3/ | Official Onetap Documentation}
 */
declare namespace Entity {
    /**
     * @returns An array with all entities in the server.
     * @see {@link https://www.onetap.com/resources/16/ | Official Onetap Documentation}
     */
    function GetEntities(): EntityID[];

    /**
     * @returns An array with all players in the server.
     * @see {@link https://www.onetap.com/resources/17/ | Official Onetap Documentation}
     */
    function GetPlayers(): EntityID[];

    /**
     * @returns An array with all enemies in the server.
     * @see {@link https://www.onetap.com/resources/18/ | Official Onetap Documentation}
     */
    function GetEnemies(): EntityID[];

    /**
     * @returns An array with all teammates in the server.
     * @see {@link https://www.onetap.com/resources/19/ | Official Onetap Documentation}
     */
    function GetTeammates(): EntityID[];

    /**
     * @returns The entity ID of the local player.
     * @see {@link https://www.onetap.com/resources/20/ | Official Onetap Documentation}
     */
    function GetLocalPlayer(): EntityID;

    /**
     * @param index The user's index.
     * @returns The entity index of the entity equivalent to the specified user index.
     * @see {@link https://www.onetap.com/resources/21/ | Official Onetap Documentation}
     */
    function GetEntityFromUserID(index: UserID): EntityID;

    /**
     * @param index The entity's index.
     * @returns Whether or not the specified entity is a teammate.
     * @see {@link https://www.onetap.com/resources/22/ | Official Onetap Documentation}
     */
    function IsTeammate(index: EntityID): boolean;

    /**
     * @param index The entity's index.
     * @returns Whether or not the specified entity is an enemy.
     * @see {@link https://www.onetap.com/resources/23/ | Official Onetap Documentation}
     */
    function IsEnemy(index: EntityID): boolean;

    /**
     * @param index The entity's index.
     * @returns Whether or not the specified entity is ourselves.
     * @see {@link https://www.onetap.com/resources/24/ | Official Onetap Documentation}
     */
    function IsLocalPlayer(index: EntityID): boolean;

    /**
     * @param index The entity's index.
     * @returns Whether or not the specified entity is valid.
     * @see {@link https://www.onetap.com/resources/25/ | Official Onetap Documentation}
     */
    function IsValid(index: EntityID): boolean;

    /**
     * @param index The entity's index.
     * @returns Whether or not the specified entity is alive.
     * @see {@link https://www.onetap.com/resources/26/ | Official Onetap Documentation}
     */
    function IsAlive(index: EntityID): boolean;

    /**
     * @param index The entity's index.
     * @returns Whether or not the specified entity is dormant to our player.
     * @see {@link https://www.onetap.com/resources/27/ | Official Onetap Documentation}
     */
    function IsDormant(index: EntityID): boolean;

    /**
     * @param index The entity's index
     * @returns Whether or not the specified entity is a bot.
     * @see {@link https://www.onetap.com/resources/71/ | Official Onetap Documentation}
     */
    function IsBot(index: EntityID): boolean;

    /**
     * @param index The entity's index
     * @returns The entity's class identifier.
     * @see {@link https://www.onetap.com/resources/28/ | Official Onetap Documentation}
     */
    function GetClassID(index: EntityID): number;

    /**
     * @param index The entity's index
     * @returns The entity's class name.
     * @see {@link https://www.onetap.com/resources/29/ | Official Onetap Documentation}
     */
    function GetClassName(index: EntityID): string;

    /**
     * @param index The entity's index
     * @returns The entity's name.
     * @see {@link https://www.onetap.com/resources/30/ | Official Onetap Documentation}
     */
    function GetName(index: EntityID): string;

    /**
     * @param index The entity's index
     * @returns The entity's origin position.
     * @see {@link https://www.onetap.com/resources/31/ | Official Onetap Documentation}
     */
    function GetRenderOrigin(index: EntityID): Vector;

    /**
     * @param index The entity's index
     * @returns The entity's eye position.
     * @see {@link https://www.onetap.com/resources/76/ | Official Onetap Documentation}
     */
    function GetEyePosition(index: EntityID): Vector;

    /**
     * @param index The entity's index
     * @param hitbox_index The hitbox's index. Ranges from 0 to 18.
     * @returns The hitbox's position of an entity.
     * @see {@link https://www.onetap.com/resources/77/ | Official Onetap Documentation}
     */
    function GetHitboxPosition(index: EntityID, hitbox_index: HitboxIndex): Vector;

    /**
     * Gets a property from an entity.
     * @param index The entity's index
     * @param table The property's table
     * @param prop The property's name
     * @returns property's name on failure.
     * @see {@link https://www.onetap.com/resources/32/ | Official Onetap Documentation}
     */
    function GetProp(index: EntityID, table: string, prop: string): any;

    /**
     * Overrides a property of an entity. Cannot be used on players.
     * @param index The entity's index
     * @param table The property's table
     * @param prop The property's name
     * @param value The new value
     * @see {@link https://www.onetap.com/resources/33/ | Official Onetap Documentation}
     */
    function SetProp(index: EntityID, table: string, prop: string, value: any): void;

    /**
     * @param index The player's index
     * @returns Weapon's entity ID
     * @see {@link https://www.onetap.com/resources/70/ | Official Onetap Documentation}
     */
    function GetWeapon(index: EntityID): EntityID;

    /**
     * @param index The player's index you want to get the weapons from.
     * @returns An array containing all of the weapon's entity indexes of a player.
     * @see {@link https://www.onetap.com/resources/151/ | Official Onetap Documentation}
     */
    function GetWeapons(index: EntityID): EntityID[];

    /**
     * @returns The game's CCSGameRulesProxy entity.
     * @see {@link https://www.onetap.com/resources/72/ | Official Onetap Documentation}
     */
    function GetGameRulesProxy(): EntityID;

    /**
     * @param class_index The class' index.
     * @returns An array containing all entities of a certain class.
     * @see {@link https://www.onetap.com/resources/87/ | Official Onetap Documentation}
     */
    function GetEntitiesByClassID(class_index: number): EntityID[];

    /**
     * @param index The entity's index
     * @returns An array containing the data of a entity's bounding box: whether or not the box is valid, the box's top left corner X position,
     * the box's top left Y position, the box's bottom right X position and the box's bottom right Y position.
     * @see {@link https://www.onetap.com/resources/161/ | Official Onetap Documentation}
     */
    function GetRenderBox(index: EntityID): number[];

    /**
     * @param index The player's or weapon's index.
     * @returns An object containing all the info of a given weapon.
     * @todo replace object with the actual CCSWeaponInfo interface.
     * @see {@link https://www.onetap.com/resources/212/ | Official Onetap Documentation}
     */
    function GetCCSWeaponInfo(index: EntityID): object;

    /**
     * Adds a flag to a player's flag list, for one tick.
     * @param index The player's index.
     * @param flag The flag text.
     * @param color The flag's color.
     * @see {@link https://www.onetap.com/resources/213/ | Official Onetap Documentation}
     */
    function DrawFlag(index: EntityID, flag: string, color: number[]): void;

    /**
     * Disables all ESP on a player, for one tick. Does not affect chams.
     * @param index The player's index.
     * @see {@link https://www.onetap.com/resources/224/ | Official Onetap Documentation}
     */
    function DisableESP(index: EntityID): void;

    /**
     * @param index The player's index.
     * @returns A players's STEAM64 identification.
     * @see {@link https://www.onetap.com/resources/229/ | Official Onetap Documentation}
     */
    function GetSteamID(index: EntityID): number;

    /**
     * @param index The player's index.
     * @param layer The animation layer index.
     * @returns A players's STEAM64 identification.
     * @see {@link https://www.onetap.com/resources/252/ | Official Onetap Documentation}
     */
    function GetAnimationLayer(index: EntityID, layer: AnimationLayerIndex): AnimationLayer;
}

export default interface IEntity {
    GetEntities: typeof Entity.GetEntities;
    GetPlayers: typeof Entity.GetPlayers;
    GetEnemies: typeof Entity.GetEnemies;
    GetTeammates: typeof Entity.GetTeammates;
    GetLocalPlayer: typeof Entity.GetLocalPlayer;
    GetEntityFromUserID: typeof Entity.GetEntityFromUserID;
    IsTeammate: typeof Entity.IsTeammate;
    IsEnemy: typeof Entity.IsEnemy;
    IsLocalPlayer: typeof Entity.IsLocalPlayer;
    IsValid: typeof Entity.IsValid;
    IsAlive: typeof Entity.IsAlive;
    IsDormant: typeof Entity.IsDormant;
    IsBot: typeof Entity.IsBot;
    GetClassID: typeof Entity.GetClassID;
    GetClassName: typeof Entity.GetClassName;
    GetName: typeof Entity.GetName;
    GetRenderOrigin: typeof Entity.GetRenderOrigin;
    GetEyePosition: typeof Entity.GetEyePosition;
    GetHitboxPosition: typeof Entity.GetHitboxPosition;
    GetProp: typeof Entity.GetProp;
    SetProp: typeof Entity.SetProp;
    GetWeapon: typeof Entity.GetWeapon;
    GetWeapons: typeof Entity.GetWeapons;
    GetGameRulesProxy: typeof Entity.GetGameRulesProxy;
    GetEntitiesByClassID: typeof Entity.GetEntitiesByClassID;
    GetRenderBox: typeof Entity.GetRenderBox;
    GetCCSWeaponInfo: typeof Entity.GetCCSWeaponInfo;
    DrawFlag: typeof Entity.DrawFlag;
    DisableESP: typeof Entity.DisableESP;
    GetSteamID: typeof Entity.GetSteamID;
    GetAnimationLayer: typeof Entity.GetAnimationLayer;
}