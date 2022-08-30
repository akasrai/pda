function addGlassEffectHeader() {
  if (this.window.scrollY > 100) {
    select("header").addClass("box-shadow");
    return select("header").addClass("glass-effect");
  }

  select("header").removeClass("box-shadow");
  return select("header").removeClass("glass-effect");
}

window.addEventListener("scroll", function () {
  addGlassEffectHeader();
});
