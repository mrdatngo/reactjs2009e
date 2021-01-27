var fs = require("fs");

module.exports = function (request, response) {
    console.log("body: ", request.body);
    const { id, name, age, email } = request.body;
    let student = {
        id,
        last_name: name,
        age,
        email,
    };

    fs.readFile("students.json", "utf8", function (err, data) {
        console.log("data: ", data);
        let students = JSON.parse(data);
        students.push(student);
        fs.writeFile("students.json", JSON.stringify(students), function () {
            response.status(200).json({
                success: true,
                message: "Add student success!",
            });
        });
    });
};
