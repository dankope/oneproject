// Type definitions for Onetap CS:GO 1.0
// Project: https://www.onetap.com/scripting/categories/scripting.1/
// Definitions by: Dan Killinger <https://github.com/dankope>
//                 April <https://github.com/aprxl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.4

import IAntiAim from './definitions/antiaim';
import IAutostop from './definitions/autostop';
import ICheat from './definitions/cheat';
import IConvar from './definitions/convar';
import IDataFile from './definitions/datafile';
import IEntity from './definitions/entity';
import IEvent from './definitions/event';
import IExploit from './definitions/exploit';
import IGlobals from './definitions/globals';
import IGrenadePrediction from './definitions/grenadePrediction';
import IInput from './definitions/input';
import ILocal from './definitions/local';
import IMaterial from './definitions/material';
import IRagebot from './definitions/ragebot';
import IRender from './definitions/render';
import ISound from './definitions/sound';
import ITrace from './definitions/trace';
import IUI from './definitions/ui';
import IUserCMD from './definitions/usercmd';
import IView from './definitions/view';
import IWorld from './definitions/world';

declare global {
    export var AntiAim: IAntiAim;
    export var Autostop: IAutostop;
    export var Cheat: ICheat;
    export var Convar: IConvar;
    export var DataFile: IDataFile;
    export var Entity: IEntity;
    export var Exploit: IExploit;
    export var Globals: IGlobals;
    export var GrenadePrediction: IGrenadePrediction;
    export var Input: IInput;
    export var Local: ILocal;
    export var Material: IMaterial;
    export var Ragebot: IRagebot;
    export var Render: IRender;
    export var Sound: ISound;
    export var Trace: ITrace;
    export var UI: IUI;
    export var UserCMD: IUserCMD;
    export var View: IView;
    export var World: IWorld;

    // TODO: Fix Onetap's Event namespace from being overshadowed by the builtin `Event`.
    // Extending the builtin `Event` with Onetap's Event namespace.
    interface Event {
        GetInt: typeof IEvent.GetInt;
        GetFloat: typeof IEvent.GetFloat;
        GetString: typeof IEvent.GetString;
    }
}