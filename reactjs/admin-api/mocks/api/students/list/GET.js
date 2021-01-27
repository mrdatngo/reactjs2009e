var fs = require("fs");

module.exports = function (request, response) {
    console.log("query: ", request.query);
    let { keyword, pageSize, current } = request.query;

    fs.readFile("students.json", "utf8", function (err, data) {
        let list = JSON.parse(data);
        list = list.filter((item) => item.last_name.includes(keyword)); // notthing change with keyword = ''

        pageSize = Number(pageSize);
        current = Number(current);

        let startIndex = pageSize * (current - 1);
        let endIndex = pageSize * current;

        let result = list.filter(
            (item, index) => index >= startIndex && index < endIndex
        );

        response.status(200).json({
            success: true,
            list: result,
            total: list.length,
        });
    });

    // fs.writeFile("students.json", JSON.stringify(list), function (err, data) {
    //     console.log("data: ", data, err);
    // });
};
