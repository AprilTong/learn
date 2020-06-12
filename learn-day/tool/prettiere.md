1.  指定每个缩进级别的空格数。
    "tabWidth": 4,
2.  一行的长度
    "printWidth": 120,
3.  语句末是否加分号
    "semi": true
4.  使用单引号
    "quotes": true
    "singleQuote": true
5.  尾随逗号
    "trailingComma": false
6.  是否在箭头函数的参数周围包括括号
    "arrowParens": "<always|avoid>"
7.  包装 markdown 文本"，always" -如果散文超过打印宽度，则将其包裹起来，"never" -不要包裹散文，"preserve"-按原样包装散文
    "proseWrap": always | never | preserve(默认)
8.  行结束 mac(\n 或者 LF) windows（\r\n 或者 CRLF）
    "endOfLine": "<lf|crlf|cr|auto>"
9.  是否缩进 Vue 文件中的代码<script>和<style>标记。
    "vueIndentScriptAndStyle": <bool>
10. 避免和 eslint 冲突,根据 eslint 规则自定修复，同时集成 prettier 到 eslint 中
    "eslintIntegration": true
