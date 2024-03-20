class ValidationError extends Error{
    constructor(error){
        super(error.name)
        this.messgae = "Request is not valid"
        this.explantions = [];
        error.errors.forEach(element => {
            this.explantions.push(element)
        });
    }

}

module.exports = ValidationError;