import { MenuPath } from "./shared";

/**
 * @see {@link https://www.onetap.com/scripting/categories/5/ | Official Onetap Documentation}
 */
declare namespace UI {
    /**
     * Register a new callback to a certain menu element.
     * @param path The element's path.
     * @see {@link https://www.onetap.com/resources/230/ | Official Onetap Documentation}
     */
    function RegisterCallback(path: MenuPath): void;

    /**
     * @returns The cheat's menu position.
     * @see {@link https://www.onetap.com/resources/214/ | Official Onetap Documentation}
     */
    function GetMenuPosition(): number[];

    /**
     * Updates the list of a Dropdown or Multi-dropdown.
     * @param path The element's path.
     * @param list The new list of values.
     * @see {@link https://www.onetap.com/resources/211/ | Official Onetap Documentation}
     */
    function UpdateList(path: MenuPath, list: string[]): void;

    /**
     * Removes a menu element created by a script.
     * @param path The element's path.
     * @see {@link https://www.onetap.com/resources/210/ | Official Onetap Documentation}
     */
    function RemoveItem(path: MenuPath): void;

    /**
     * @returns The virtual-key code for a hotkey.
     * @param path The element's path.
     * @see {@link https://www.onetap.com/resources/209/ | Official Onetap Documentation}
     */
    function GetHotkey(path: MenuPath): number;

    /**
     * Overrides a hotkey's state/mode.
     * @param path The element's path.
     * @param state The new state in string form. This can either be 'Always', 'Toggle' or 'Hold'.
     * @see {@link https://www.onetap.com/resources/207/ | Official Onetap Documentation}
     */
    function SetHotkeyState(path: MenuPath, state: string): void;

    /**
     * @returns The state/mode of a hotkey.
     * @param path The element's path.
     * @see {@link https://www.onetap.com/resources/206/ | Official Onetap Documentation}
     */
    function GetHotkeyState(path: MenuPath): string;

    /**
     * Toggles a hotkey on/off. Only works on hotkeys set to 'Toggle'.
     * @param path The element's path.
     * @see {@link https://www.onetap.com/resources/203/ | Official Onetap Documentation}
     */
    function ToggleHotkey(path: MenuPath): void;

    /**
     * Overrides a color-picker's color.
     * @param path The element's path.
     * @param color The new color.
     * @see {@link https://www.onetap.com/resources/202/ | Official Onetap Documentation}
     */
    function SetColor(path: MenuPath, color: number[]): void;

    /**
     * Creates a new sub-tab at the designated path and then returns the registered path.
     * @param path The path to the tab.
     * @param name The sub-tab's name.
     * @see {@link https://www.onetap.com/resources/201/ | Official Onetap Documentation}
     */
    function AddSubTab(path: MenuPath, name: string): MenuPath;

    /**
     * Creates a new textbox at the designated path and then returns the registered path.
     * @param path The path to the textbox.
     * @param name The textbox's name.
     * @see {@link https://www.onetap.com/resources/200/ | Official Onetap Documentation}
     */
    function AddTextbox(path: MenuPath, name: string): MenuPath;

    /**
     * Creates a new color picker at the designated path and then returns the registered path.
     * @param path The path to the color picker.
     * @param name The color picker's name.
     * @see {@link https://www.onetap.com/resources/199/ | Official Onetap Documentation}
     */
    function AddColorPicker(path: MenuPath, name: string): MenuPath;

    /**
     * Creates a new multi-dropdown at the designated path and then returns the registered path.
     * @param path The path to the multi-dropdown.
     * @param name The multi-dropdown's name.
     * @param values The multi-dropdown's values.
     * @param search_bar Whether or not the multi-dropdown should contain a search bar.
     * @see {@link https://www.onetap.com/resources/198/ | Official Onetap Documentation}
     */
    function AddMultiDropdown(path: MenuPath, name: string, values: string[], search_bar: number): MenuPath;

    /**
     * Creates a new dropdown at the designated path and then returns the registered path.
     * @param path The path to the dropdown.
     * @param name The dropdown's name.
     * @param values The dropdown's values.
     * @param search_bar Whether or not the dropdown should contain a search bar.
     * @see {@link https://www.onetap.com/resources/197/ | Official Onetap Documentation}
     */
    function AddDropdown(path: MenuPath, name: string, values: string[], search_bar: number): MenuPath;

    /**
     * Creates a new hotkey and at the designated path and then returns the registered path.
     * @param path The path to the hotkey. Can only be inside a hotkey list.
     * @param name The hotkey's name.
     * @param display_name The hotkey's display name, shown in the keybind list.
     * @see {@link https://www.onetap.com/resources/196/ | Official Onetap Documentation}
     */
    function AddHotkey(path: MenuPath, name: string, display_name: string): MenuPath;

    /**
     * Creates a new integer slider at the designated path and then returns the registered path.
     * @param path The path to the slider.
     * @param name The slider's name.
     * @param min The minimum value of the slider.
     * @param max The maximum value of the slider.
     * @see {@link https://www.onetap.com/resources/194/ | Official Onetap Documentation}
     */
    function AddSliderInt(path: MenuPath, name: string, min: number, max: number): MenuPath;

    /**
     * Creates a new float slider at the designated path and then returns the registered path.
     * @param path The path to the slider.
     * @param name The slider's name.
     * @param min The minimum value of the slider.
     * @param max The maximum value of the slider.
     * @see {@link https://www.onetap.com/resources/195/ | Official Onetap Documentation}
     */
    function AddSliderFloat(path: MenuPath, name: string, min: number, max: number): MenuPath;

    /**
     * Creates a new checkbox at the designated path and then returns the registered path.
     * @param path The path to the checkbox.
     * @param name The checkbox's name.
     * @see {@link https://www.onetap.com/resources/193/ | Official Onetap Documentation}
     */
    function AddCheckbox(path: MenuPath, name: string): MenuPath;

    /**
     * Overrides the value of a menu element. Used in everything except color-pickers, hotkeys and textboxes.
     * @param path The path to the element.
     * @param value The new value.
     * @see {@link https://www.onetap.com/resources/192/ | Official Onetap Documentation}
     */
    function SetValue(path: MenuPath, value: number): MenuPath;

    /**
     * Gets the value of a menu element and returns it.
     * @param path The path to the element.
     * @see {@link https://www.onetap.com/resources/190/ | Official Onetap Documentation}
     */
    function GetValue(path: MenuPath): number;

    /**
     * Gets the value of a element in a string form. Used mainly on textboxes.
     * @param path The path to the element.
     * @see {@link https://www.onetap.com/resources/189/ | Official Onetap Documentation}
     */
    function GetString(path: MenuPath): string;

    /**
     * Gets the color of a color-picker and returns it.
     * @param path The path to the color-picker.
     * @see {@link https://www.onetap.com/resources/188/ | Official Onetap Documentation}
     */
    function GetColor(path: MenuPath): number[];

    /**
     * Gets all menu element's within a certain path and return them.
     * @param path The path to the container.
     * @see {@link https://www.onetap.com/resources/191/ | Official Onetap Documentation}
     */
    function GetChildren(path: MenuPath): string[];

    /**
     * @returns Whether or not the cheat's menu is open.
     * @see {@link https://www.onetap.com/resources/52/ | Official Onetap Documentation}
     */
    function IsMenuOpen(): boolean;

    /**
     * Overrides a menu element's visibility.
     * @param path The path to the element.
     * @param visible Whether or not the element should be visible.
     * @see {@link https://www.onetap.com/resources/43/ | Official Onetap Documentation}
     */
    function SetEnabled(path: MenuPath, visible: number): void;
}

export default interface IUI {
    RegisterCallback: typeof UI.RegisterCallback;
    GetMenuPosition: typeof UI.GetMenuPosition;
    UpdateList: typeof UI.UpdateList;
    RemoveItem: typeof UI.RemoveItem;
    GetHotkey: typeof UI.GetHotkey;
    SetHotkeyState: typeof UI.SetHotkeyState;
    GetHotkeyState: typeof UI.GetHotkeyState;
    ToggleHotkey: typeof UI.ToggleHotkey;
    SetColor: typeof UI.SetColor;
    AddSubTab: typeof UI.AddSubTab;
    AddTextbox: typeof UI.AddTextbox;
    AddColorPicker: typeof UI.AddColorPicker;
    AddMultiDropdown: typeof UI.AddMultiDropdown;
    AddDropdown: typeof UI.AddDropdown;
    AddHotkey: typeof UI.AddHotkey;
    AddSliderInt: typeof UI.AddSliderInt;
    AddSliderFloat: typeof UI.AddSliderFloat;
    AddCheckbox: typeof UI.AddCheckbox;
    SetValue: typeof UI.SetValue;
    GetValue: typeof UI.GetValue;
    GetString: typeof UI.GetString;
    GetColor: typeof UI.GetColor;
    GetChildren: typeof UI.GetChildren;
    IsMenuOpen: typeof UI.IsMenuOpen;
    SetEnabled: typeof UI.SetEnabled;
}