
for (let i = 1; i <= 5; i++) {
    $(".question" + i).click(function () {
        $(".answer" + i).slideToggle();
        $(".question" + i).toggleClass("active");
        $(".arrow"+i).toggleClass("rotated");
    });
}
for (let i = 1; i <= 5; i++) {
    $(".arrow" + i).click(function () {
        $(".answer" + i).slideToggle();
        $(".question" + i).toggleClass("active");
        $(".arrow"+i).toggleClass("rotated");
    });
}