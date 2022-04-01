import { Vector } from "./shared";

/**
 * Allows scripts to create new renderable views of the game world.
 * @see {@link https://www.onetap.com/scripting/categories/23/ | Official Onetap Documentation}
 */
declare namespace View {
    /**
     * Creates a new view object and returns its index.
     * @returns The view object index.
     * @see {@link https://www.onetap.com/resources/225/ | Official Onetap Documentation}
     */
    function Create(): number;

    /**
     * Updates the view with the specified resolution, position and angles. Can only be called in 'FRAME_RENDER_START' callback.
     * @param index The view's index
     * @param w The width of the image
     * @param h The height of the image
     * @param origin The camera position
     * @param angles The camera angles
     * @see {@link https://www.onetap.com/resources/226/ | Official Onetap Documentation}
     */
    function Update(index: number, w: number, h: number, origin: Vector, angles: Vector): void;

    /**
     * Renders a rectangle representing the image the view last captured.
     * @param index The view's index
     * @param x The X position
     * @param y The Y position
     * @param w The rectangle's width
     * @param h The rectangle's height
     * @see {@link https://www.onetap.com/resources/227/ | Official Onetap Documentation}
     */
    function Render(index: number, x: number, y: number, w: number, h: number): void;

    /**
     * Converts a 3D point into a 2D point on your screen relative to the view's camera position and angles.
     * @param index The view's index
     * @param point The 3D point
     * @returns The translated 2D point on your screen.
     * @see {@link https://www.onetap.com/resources/228/ | Official Onetap Documentation}
     */
    function WorldToScreen(index: number, point: Vector): number[];
}

export default interface IView {
    Create: typeof View.Create;
    Update: typeof View.Update;
    Render: typeof View.Render;
    WorldToScreen: typeof View.WorldToScreen;
}
