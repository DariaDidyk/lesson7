// describe('sum', () => {
//     it('should sum two values', () => {
//         expect(sum(5, 2)).to.equal(7);
//     });
// });

// const expect = (actualResult) => ({
//     to: {
//         egual:(expecterResult) => const 
//     }
// });

// describe('length', () => {
//     it('should sum two values of object', () => {
//         expect(
//             length({
//                 a: 2,
//                 b: 3,
//             })
//         ).to.equal(2);
//     });
// });

describe('functions', () => {
    describe('sum', () => {
    it('should sum two values', () => { 
        expect(sum(5, 2)).to.equal(7);   
    });
});
    describe('length', () => {
        it('should sum two values of object', () => {
            expect(
                length({
                    a: 2,
                    b: 3,
                })
            ).to.equal(2);
        });
    });
describe('copy', () => {
    it('should sum two values of object', () => {
        const obj = {
            a: 2,
            b: 3,   
        };
        expect(copy(obj)).not.equal(obj);
        });
        it('should create copy of object', () => {
            const obj = {
                a: 2,
                b: 3,
            };
            expect(copy(obj)).to.deep.equal(obj);
        });
    });
    describe('deepCopy', () => {
        it('should deep copy of object deeply', () => {
        const obj = {
            a: {
                a: {
                    a: {
                        a: 3,
                        b: 3,
                    },
                }, 
            },  
            b: 3,   
        };
        const objectCopy = deepCopy(obj);
        // console.log(objectCopy.a);
        expect(objectCopy.a).not.equal(obj.a);
        });
    });
});