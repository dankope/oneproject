/**
 * @see {@link https://www.onetap.com/scripting/categories/11/ | Official Onetap Documentation}
 */
declare namespace Sound {
    /**
     * Plays a sound.
     * @param path The path to the sound file.
     * @see {@link https://www.onetap.com/resources/82/ | Official Onetap Documentation}
     */
    function Play(path: string): void;

    /**
     * Plays a sound on your in-game microphone.
     * @param path The path to the sound file.
     * @see {@link https://www.onetap.com/resources/99/ | Official Onetap Documentation}
     */
    function PlayMicrophone(path: string): void;

    /**
     * Stops playing a sound on your microphone.
     * @see {@link https://www.onetap.com/resources/100/ | Official Onetap Documentation}
     */
    function StopMicrophone(): void;
}

export default interface ISound {
    Play: typeof Sound.Play;
    PlayMicrophone: typeof Sound.PlayMicrophone;
    StopMicrophone: typeof Sound.StopMicrophone;
}
