describe("Наличие элементов", () => {
  it("Главная страница", function() {
    return this.browser
      .url("/")
      .assertView("page-opened", "body")
  });
});
