let basePath = window.location.pathname.includes("/iitu-sfb/") ? "/iitu-sfb/" : "/";
$.get(basePath + "templates/nav.html", function(data) {
    $("body").prepend(data);
});