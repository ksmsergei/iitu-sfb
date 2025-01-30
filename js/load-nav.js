$.get("../templates/nav.html", function(data) {
    $("body").prepend(data);
});