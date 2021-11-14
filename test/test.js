const assert = require('assert');
const userRepository = require('../DataAccess/Repositories/userRepository');

describe('testDescibe', () => {
    it('test IT', (done) => {
        var testUser = {
            firstName: 'Arman',
            lastName: 'Ghaffarian',
            userName: '4rm4n',
            password: 'A123',
        }
        userRepository.create_user(testUser).then(() => {
            done();
            expect(1).to.equal(1);
            
        });

    })
})