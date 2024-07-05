import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import rolljson from "@rollup/plugin-json"

// 注入变量
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const NODE_ENV = process.env.NODE_ENV
    // 环境变量
const isProduction = NODE_ENV === 'production'
    // 插件
const plugins = [
        // 处理TS
        typescript({
            tsconfig: './tsconfig.json',
            declaration: false
        }),
        nodeResolve({
            browser: true,
            preferBuiltins: false
        }),
        commonjs(),
        rolljson(),
    ]
    // 判断环境变量 dev 和 build 两种情况
const extraPlugins = [
    serve({
        // host: '172.20.10.7',
        host: '192.168.5.235',
        port: 8081,
        // open: true,
        contentBase: './',
    }),
    livereload()
]
plugins.push(...extraPlugins)


export default {
    // 入口
    input: './src/index.ts',
    // 出口
    output: {
        file: "./public/index.js"
    },
    plugins: plugins
}