exports.lambdaHandler = async (event) => {

    var responseText = "Response from NodeJS container"
    const response = {
        statusCode: 200,
        headers: {
            'Content-Length': Buffer.byteLength(responseText),
            'Content-Type': 'application/json',

        },
        body: responseText
    };
    return response;
};