import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import buble from "rollup-plugin-buble";

export default {
  input: "index.js",
  output: {
    file: "build/flubber2.js",
    format: "umd",
    name: "flubber2",
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      sourceMap: false
    }),
    buble()
  ]
};
