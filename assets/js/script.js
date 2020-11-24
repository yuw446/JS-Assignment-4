$(() => {
    loadData();
    console.log("JS Connected");
});

function loadData() {
    $.getJSON("data.json", (data) => {

        for (let i in data) {
            console.log(data[i]);
        }

        genContent(data);
    });
}

genContent = (temp) => {
    let source = $("#portfolio-template").html();
    let template = Handlebars.compile(source);
    let result = template(temp);
    let list = $(".project-list");
    list.append(result);
}