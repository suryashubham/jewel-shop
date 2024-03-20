class ValidationError extends Error {
    constructor(error) {
        let errorName = error.name;
        let explanations = [];
        error.errors.forEach((err) => {
            explanations.push(err.message);
        });
        super(
            'Not able to validate the data sent in the request',
            errorName,
        );
        /**Add some extra data to error object for better understanding */
        this.explanations = explanations
    }

}

module.exports = ValidationError;