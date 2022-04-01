import { Vector } from "./shared";

/**
 * @see {@link https://www.onetap.com/scripting/categories/15/ | Official Onetap Documentation}
 */
declare namespace World {
    /**
     * @returns The server's IP address.
     * @see {@link https://onetap.com/resources/103/ | Official Onetap Documentation}
     */
    function GetServerString(): string;

    /**
     * @returns The current map's name.
     * @see {@link https://www.onetap.com/resources/65/ | Official Onetap Documentation}
     */
    function GetMapName(): string;

    /**
     * Used to get the index of a model in game world.
     * @param model_path The on-disk path to the model.
     * @returns The model's index.
     * @see {@link https://www.onetap.com/resources/244/ | Official Onetap Documentation}
     */
    function GetModelIndex(model_path: string): number;

    /**
     * Creates a lighting strike at a specified position.
     * @param sound Whether or not to play audio.
     * @param position The position in the world to spawn the lightning strike.
     * @see {@link https://www.onetap.com/resources/249/ | Official Onetap Documentation}
     */
    function CreateLightningStrike(sound: boolean, position: Vector): void;
}

export default interface IWorld {
    GetServerString: typeof World.GetServerString;
    GetMapName: typeof World.GetMapName;
    GetModelIndex: typeof World.GetModelIndex;
    CreateLightningStrike: typeof World.CreateLightningStrike;
}

