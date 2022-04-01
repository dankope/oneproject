// rollup.config.js
/**
 * @type {import('rollup').RollupOptions}
 */

import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import babel from '@rollup/plugin-babel';
import strip from '@rollup/plugin-strip';
import replace from '@rollup/plugin-replace';
import { terser } from "rollup-plugin-terser";

export default {
    input: './src/index.js',
    preserveSymlinks: true,
    treeshake: {
        moduleSideEffects: true,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
    },
    output: {
        file: './out/bundle.js',
        format: 'es',
        sourcemap: false,
        freeze: false,
        esModule: false,
        exports: "none",
        extend: false,
        externalLiveBindings: false,
        strict: true,
    },
    plugins: [
        resolve({
            browser: false
        }),
        commonjs({
            sourceMap: false
        }),
        babel({
            exclude: "node_modules/**",
            babelHelpers: 'bundled'
        }),
        strip({
            functions: ['logger.debug', 'debug', 'log.debug', 'logger.trace.*', 'trace.*']
        }),
        terser({
            ecma: 5,
            keep_classnames: true,
            keep_fnames: true
        }),
        replace({
            preventAssignment: true,
            values: {
                __buildVersion__: () => JSON.stringify("Release"),
                __buildDate__: () => {
                    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    let date = new Date();
                    let month = monthNames[date.getMonth()];
                    let day = date.getDate();
                    let year = date.getFullYear();
                    return JSON.stringify(month + " " + day + " " + year);
                }
            }
        })
    ]
}