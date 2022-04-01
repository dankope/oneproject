// Preface: 
// Event collides with the builtin `Event` so we have to extend the builtin with our functions and just hope no one tries to use builtin stuff.

/**
 * @see {@link https://www.onetap.com/scripting/categories/7/ | Official Onetap Documentation}
 */
declare namespace OTEvent {
    /**
     * Gets a field's value in integer form.
     * @param field_name The field.
     * @see {@link https://www.onetap.com/resources/60/ | Official Onetap Documentation}
     */
    function GetInt(field_name: string): number;

    /**
     * Gets a field's value in float form.
     * @param field_name The field.
     * @see {@link https://www.onetap.com/resources/61/ | Official Onetap Documentation}
     */
    function GetFloat(field_name: string): number;

    /**
     * Gets a field's value in string form.
     * @param field_name The field.
     * @see {@link https://www.onetap.com/resources/62/ | Official Onetap Documentation}
     */
    function GetString(field_name: string): string;
}

export default OTEvent;