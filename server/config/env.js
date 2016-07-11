/*
** This file should only export environmnet variables
** The 'concatenateVariables' should be exported into a different module as a util
** But for the sake of simplicity, I will include it here, since I'm not really focusing
** into this server implementation.
*/

module.exports = {
    VARIABLES: {
        DEVELOPMENT: false
    },
    concatenateVariables: function concatenateVariables(vars) {
        let result = "", k;

        for (k in vars) {
            if (typeof vars[k] === "string") {
                result += "const " + k + " = '" + vars[k] + "'; ";
            } else {
                result += "const " + k + " = " + vars[k] + "; ";
            }
        }

        return result;
    }
};

