const mongoose = require('mongoose');
const Schmea = mongoose.Schema;
const validator = require('validator');

// ```
//  "name":"abc",
//   "email": "abc@gmail.",
//   "password":"123"
// ```

const UserModel = new Schmea(
    {
        name: {
            type: String,
            required: [true, "Please provide name"]
        },
        email: {
            type: String,
            required: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw Error('Not a valid Email')
                }
            }
        },
        password: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        }
    }
)

module.exports = mongoose.model('users', UserModel);