module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node":true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true,
                "jest":true
            },
            "files": [
                ".eslintrc.{js,cjs}",
                "**/*.test.js",
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
