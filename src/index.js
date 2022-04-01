/// <reference path="../types/onetap/index.d.ts" />

import * as logger from "./logger";

if (__buildVersion__ == "Debug") {
    logger.init("{{PROJECTNAME}}.debug");
} else {
    logger.init("{{PROJECTNAME}}.log");
}

logger.log("{{PROJECTNAME}} " + __buildVersion__ + " (" + __buildDate__ + ")");

