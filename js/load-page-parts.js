let basePath = window.location.pathname.includes("/iitu-sfb/") ? "/iitu-sfb/" : "/";
$.get(basePath + "templates/nav.html", function(data) {
    $("body").prepend(data);
});

$.get(basePath + "templates/footer.html", function(data) {
    $("body").append(data);
});
