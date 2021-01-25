module.exports = {
    ci: {
        collect: {
            numberOfRuns: 3,
            staticDistDir: ".dist/lighthouse-ci"
        },
        assert: {
            assertions: {
                "first-contentful-paint": ["warn", {maxNumericValue: 6000}]
            }
        },
        upload: {
            target: "temporary-public-storage"
        }
    }
}