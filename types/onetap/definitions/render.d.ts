import { Vector } from "./shared";

/**
 * @see {@link https://www.onetap.com/scripting/categories/4/ | Official Onetap Documentation}
 */
declare namespace Render {
    /**
     * Renders a line.
     * @param x1 The first X position
     * @param y1 The first Y position
     * @param x2 The second X position
     * @param y2 The second Y position
     * @param color The line's color
     * @see {@link https://www.onetap.com/resources/35/ | Official Onetap Documentation}
     */
    function Line(x1: number, y1: number, x2: number, y2: number, color: number[]): void;

    /**
     * Renders a rectangle outline.
     * @param x The X position
     * @param y The Y position
     * @param w The rectangle's width
     * @param h The rectangle's height
     * @param color The rectangle's color
     * @see {@link https://www.onetap.com/resources/36/ | Official Onetap Documentation}
     */
    function Rect(x: number, y: number, w: number, h: number, color: number[]): void;

    /**
     * Renders a rectangle.
     * @param x The X position.
     * @param y The Y position.
     * @param w The rectangle's width.
     * @param h The rectangle's height.
     * @param color The rectangle's color.
     * @see {@link https://www.onetap.com/resources/37/ | Official Onetap Documentation}
     */
    function FilledRect(x: number, y: number, w: number, h: number, color: number[]): void;

    /**
     * Renders a ring.
     * @param x The X position
     * @param y The Y position
     * @param radius The circle's radius
     * @param color The circle's color
     * @see {@link https://www.onetap.com/resources/38/ | Official Onetap Documentation}
     */
    function Circle(x: number, y: number, radius: number, color: number[]): void;

    /**
     * Renders a circle.
     * @param x The X position
     * @param y The Y position
     * @param radius The circle's radius
     * @param color The circle's color
     * @see {@link https://www.onetap.com/resources/150/ | Official Onetap Documentation}
     */
    function FilledCircle(x: number, y: number, radius: number, color: number[]): void;

    /**
     * Renders a gradient.
     * @param x The X position
     * @param y The Y position
     * @param w The gradient's width
     * @param h The gradient's height
     * @param is_horizontal The gradient's direction. Use '0' for vertical and '1' for horizontal.
     * @param color1 The gradient's first color
     * @param color2 The gradient's second color
     * @see {@link https://www.onetap.com/resources/80/ | Official Onetap Documentation}
     */
    function GradientRect(x: number, y: number, w: number, h: number, is_horizontal: number, color1: number[], color2: number[]): void;

    /**
     * Renders a rectangle with a texture.
     * @param x The X position
     * @param y The Y position
     * @param w The rectangle's width
     * @param h The rectangle's height
     * @param texture_index The rectangle's texture index
     * @see {@link https://www.onetap.com/resources/109/ | Official Onetap Documentation}
     */
    function TexturedRect(x: number, y: number, w: number, h: number, texture_index: number): void;

    /**
     * Renders a string.
     * @param x The X position
     * @param y The Y position
     * @param centered Whether or not it should be centered.
     * @param text The actual string
     * @param color The string's color
     * @param font The string's font. Onetap has predefined fonts from 1 to 7.
     * @see {@link https://www.onetap.com/resources/204/ | Official Onetap Documentation}
     */
    function String(x: number, y: number, centered: number, text: string, color: number[], font: number): void;

    /**
     * Renders a polygon.
     * @param points A matrix of all 3 points of the polygon.
     * @param color The polygon's color.
     * @see {@link https://www.onetap.com/resources/84/ | Official Onetap Documentation}
     */
    function Polygon(points: number[][], color: number[]): void;

    /**
     * Convers a 3D point into a 2D point on your screen and returns its X and Y positions, and whether or not the point is behind you.
     * @param point The 3D point
     * @see {@link https://www.onetap.com/resources/39/ | Official Onetap Documentation}
     */
    function WorldToScreen(point: Vector): number[];

    /**
     * @returns The width and height of your screen.
     * @see {@link https://www.onetap.com/resources/40/ | Official Onetap Documentation}
     */
    function GetScreenSize(): number[];

    /**
     * Finds an already existing font by its parameters.
     * @param font The font's name
     * @param size The font's size
     * @param windows The font is installed into the windows font directory.
     * @returns The font identifier.
     * @see {@link https://www.onetap.com/resources/238/ | Official Onetap Documentation}
     */
    function GetFont(font: string, size: number, windows: boolean): number;

    /**
     * Creates a new texture from a on-disk file.
     * @file .bmp, .dds, .dib, .hdr, .jpg, .pfm, .png, .ppm and .tga.
     * @param path The file's path relative to CSGO's folder.
     * @see {@link https://www.onetap.com/resources/108/ | Official Onetap Documentation}
     */
    function AddTexture(path: string): number;

    /**
     * @returns The width and height of a string.
     * @param text The actual string.
     * @param font The string's font.
     * @see {@link https://www.onetap.com/resources/205/ | Official Onetap Documentation}
     */
    function TextSize(text: string, font: number): number[];

    /**
     * Sets a "viewport" where any render function called after this that overflows out of bounds will not be rendered.
     * Must call PopScissorRectangle afterwards.
     * @param x The X position
     * @param y The Y position
     * @param w The scissor rectangle's width
     * @param h The scissor rectangle's height
     * @see TO BE ADDED
     */
    function SetScissorRectangle(x: number, y: number, w: number, h: number): void;

    /**
     * Used to exit a scissor rectangle (SetScissorRectangle)
     * 
     * @see TO BE ADDED
     */
    function PopScissorRectangle(): void;
}

export default interface IRender {
    Line: typeof Render.Line;
    Rect: typeof Render.Rect;
    FilledRect: typeof Render.FilledRect;
    Circle: typeof Render.Circle;
    FilledCircle: typeof Render.FilledCircle;
    GradientRect: typeof Render.GradientRect;
    TexturedRect: typeof Render.TexturedRect;
    String: typeof Render.String;
    Polygon: typeof Render.Polygon;
    WorldToScreen: typeof Render.WorldToScreen;
    GetScreenSize: typeof Render.GetScreenSize;
    GetFont: typeof Render.GetFont;
    AddTexture: typeof Render.AddTexture;
    TextSize: typeof Render.TextSize;
    SetScissorRectangle: typeof Render.SetScissorRectangle;
    PopScissorRectangle: typeof Render.PopScissorRectangle;
}