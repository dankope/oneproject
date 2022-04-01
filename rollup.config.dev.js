// rollup.config.dev.js
/**
 * @type {import('rollup').RollupOptions}
 */

import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

export default {
    input: './src/index.js',
    preserveSymlinks: true,
    treeshake: {
        moduleSideEffects: true,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
    },
    output: {
        file: './out/dev-bundle.js',
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
        replace({
            preventAssignment: true,
            values: {
                // TODO: set __dirname and __filename as well.
                __buildVersion__: () => JSON.stringify("Debug"),
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