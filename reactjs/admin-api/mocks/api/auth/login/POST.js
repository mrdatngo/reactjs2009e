module.exports = function (request, response) {
    console.log("body: ", request.body);
    const { username, password } = request.body;
    if (username === "admin" && password === "123456") {
        response.status(200).json({
            success: true,
        });
    } else {
        response.status(200).json({
            success: false,
            message: "Username or password is incorrect!",
        });
    }
};
