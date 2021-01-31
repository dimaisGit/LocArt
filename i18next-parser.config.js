module.exports = {
    defaultNamespace: 'common',
    useKeysAsDefaultValue: false,
    locales: ['ru', 'en'],
    output: 'src/i18n/locales/$LOCALE/$NAMESPACE.json',
    input: 'src/**/*.{js,ts,tsx}',
    sort: false,
    defaultValue: 'FIXME',
    lexers: {
        js: ['JsxLexer'],
        ts: ['JavascriptLexer'],
        jsx: ['JsxLexer'],
        tsx: ['JsxLexer'],
    },
};