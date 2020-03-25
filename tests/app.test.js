const app = require("../app");

test('should return an array with words that are longer than 6 characters',() =>{
    let testArray = ["dannyNoTats", "gem", "online", "moodle", "cheeses" ];

    expect(app.moreThanSix(testArray)).toEqual(
        expect.arrayContaining(["dannyNoTats", "cheeses"])
    )

})

test("should return moodle", () => {
    let testArray = ["dannyNoTats", "gem", "online", "moodle", "cheeses" ];

    expect(app.moreThanSix(testArray)).not.toContain("moodle");
})
