import Cheat from './api/cheat';
import DataFile from './api/datafile';

import { init as initLogger } from "../src/logger";

global.Cheat = Cheat;
global.DataFile = DataFile;

// TODO: fix this so we can mock shit correctly
// jest.mock('../src/logger');

// Setup our logger api
initLogger("Logfile");