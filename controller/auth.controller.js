const {User} = require('../model/Path');
const bcrypt = require("bcrypt");

// Signup a new user
async function Signup(req, res) {
    try {
        const { name, email, password, age, address } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
            age: age,
            address: address,
        });

        // Return the saved user
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { Signup };
