/**
 * Allows scripts to manipulate game materials.
 * @see {@link https://www.onetap.com/scripting/categories/20/ | Official Onetap Documentation}
 */
declare namespace Material {
    /**
     * Creates a new material and returns true on success.
     * @param name The material's name
     * @see {@link https://www.onetap.com/resources/162/ | Official Onetap Documentation}
     */
    function Create(name: string): boolean;

    /**
     * Deletes an existing material and returns true on success.
     * @param name The material's name
     * @see {@link https://www.onetap.com/resources/163/ | Official Onetap Documentation}
     */
    function Destroy(name: string): boolean;

    /**
     * Gets an existing material by the name and returns its index.
     * @param name The material's name
     * @see {@link https://www.onetap.com/resources/164/ | Official Onetap Documentation}
     */
    function Get(name: string): number;

    /**
     * Overrides a material shader's value and returns true on success. Can only be called in 'Material' callback.
     * @param index The material's index
     * @param shader The shader's name
     * @param value The shader's value
     * @see {@link https://www.onetap.com/resources/165/ | Official Onetap Documentation}
     */
    function SetKeyValue(index: number, shader: string, value: string): boolean;

    /**
     * Applies changes to a material and returns true on success. Can only be called in 'Material' callback.
     * @param index The material's index
     * @see {@link https://www.onetap.com/resources/166/ | Official Onetap Documentation}
     */
    function Refresh(index: number): boolean;

    /**
     * Sets key values of an overriden material.
     * @param material The material's name.
     * @param key The key's name.
     * @param value The shader's value.
     * @see {@link https://www.onetap.com/resources/255/ | Official Onetap Documentation}
     */
    function SetProxyKeyValue(material: string, key: string, value: string): void;

    /**
     * Creates a proxy to override material properties .
     * @param material The material's name.
     * @see {@link https://www.onetap.com/resources/253/ | Official Onetap Documentation}
     */
    function CreateProxy(material: string): void;

    /**
     * Destroys the proxy for a material.
     * @param material The material's name.
     * @see {@link https://www.onetap.com/resources/254/ | Official Onetap Documentation}
     */
    function DestroyProxy(material: string): void;

    /**
     * Applies the modified key values to the material.
     * @param material The material's name.
     * @see {@link https://www.onetap.com/resources/256/ | Official Onetap Documentation}
     */
    function RefreshProxy(material: string): void;

    /**
     * @returns The material at your crosshair.
     * @see {@link https://www.onetap.com/resources/258/ | Official Onetap Documentation}
     */
    function GetMaterialAtCrosshair(): string;

    /**
     * Creates a proxy for the original material using the new material as an override.
     * @param original_material The original material's name.
     * @param material The material that will be used instead of the original material.
     * @see {@link https://www.onetap.com/resources/257/ | Official Onetap Documentation}
     */
    function Replace(original_material: string, material: string): void;
}

export default interface IMaterial {
    Create: typeof Material.Create;
    Destroy: typeof Material.Destroy;
    Get: typeof Material.Get;
    SetKeyValue: typeof Material.SetKeyValue;
    Refresh: typeof Material.Refresh;
    SetProxyKeyValue: typeof Material.SetProxyKeyValue;
    CreateProxy: typeof Material.CreateProxy;
    DestroyProxy: typeof Material.DestroyProxy;
    RefreshProxy: typeof Material.RefreshProxy;
    GetMaterialAtCrosshair: typeof Material.GetMaterialAtCrosshair;
    Replace: typeof Material.Replace;
}