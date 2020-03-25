const index = require('../index');      //no need for .js at the end

//testing classes

// test or it can be used

describe('testing all function are doing what they are meant to', () => {
    test('should see pace increased by 1 after function call', () => {
        //comment here
        expect(index.pete.pace).toBe(97);
        index.pete.increasePace(); //called the function
        expect(index.pete.pace).toBe(98);
        index.pete.pace = 97
    })
})  //group message

describe("testing all decrease functions are doing what they are meant to", () => {
    test("should see pace decrease by 1 after function call", () => {
        index.pete.decreasePace();
        expect(index.pete.pace).toBe(96);
    })
    test("should see passing decrease by 1 after function call", () => {
        index.pete.decreasePassing();
        expect(index.pete.passing).toBe(3);
    })
    test("should see passing decrease by 1 after function call", () => {
        index.pete.decreaseShooting();
        expect(index.pete.shooting).toBe(94);
    })
})

