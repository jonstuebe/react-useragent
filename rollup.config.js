import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import autoExternal from "rollup-plugin-auto-external";
import pkg from "./package.json";

export default [
  // browser-friendly UMD build
  {
    input: pkg.source,
    output: {
      file: pkg.browser,
      format: "umd",
      exports: "named"
    },
    name: pkg.umdName,
    plugins: [
      babel({
        exclude: "node_modules/**",
        runtimeHelpers: true
      }),
      resolve(),
      commonjs(),
      autoExternal()
    ],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
      "mobile-detect": "MobileDetect"
    }
  },
  {
    input: pkg.source,
    output: [
      { file: pkg.main, format: "cjs", exports: "named" },
      { file: pkg.module, format: "es", exports: "named" }
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        runtimeHelpers: true
      }),
      autoExternal()
    ]
  }
];
