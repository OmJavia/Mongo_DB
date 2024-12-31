const express = require('express');
const router = express.Router();
const {User, Product} = require('../model/Path'); 
const { Signup } = require('../controller/auth.controller');


// Route to create a new user
router.post('/signup',Signup );

// Route to get record of all the users(Find)
router.get('/find', async (req, res) => {
    try {
        let data = await User.aggregate([
            {
                $match: {age: {$gt: 25}}
            },
            {       // 1 for ascending and -1 for descending
                $sort: {age: -1}
            },
            {
                $project: {_id:0,name:1,age:1}
            }
            // {
            //     $count: 'total'
            // }

        ]); // Use the correct model
        return res.status(200).json({
            data: data,
        });
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            error: err.message,
        });
    }
});

// Route to get record of one users
router.get('/findone', async (req, res) => {
    try {
        let data = await User.findOne({
            name: 'Mayur',
        }); 
        return res.status(200).json({
            data: data,
        });
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            error: err.message,
        });
    }
});

// Route to get record of one users and Updating it
router.get('/findoneandupdate', async (req, res) => {
    try {
        let data = await User.findOneAndUpdate({
            name: 'Mayur',
        }, {
            email: 'Mayurpanchal@gmail.com',
        }
    ); 
        return res.status(200).json({
            data: data,
        });
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            error: err.message,
        });
    }
});

// Route to get record of one users and Deleting it
router.get('/findoneanddelete', async (req, res) => {
    try {
        let data = await User.findOneAndDelete({
            name: 'Mayur',
        }); 
        return res.status(200).json({
            data: data,
        });
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            error: err.message,
        });
    }
});

// Route to get record of one users and Replacing it
router.get('/findoneandreplace', async (req, res) => {
    try {
        let data = await User.findOneAndReplace({
            name: 'Mayur',
        }, {
            name: 'Mayur Panchal',
        }); 
        return res.status(200).json({
            data: data,
        });
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            error: err.message,
        });
    }
});

// Delete Many users
router.post('/deletemany', async (req, res) => {
    try {
        let data = await User.deleteMany({
        });
        return res.status(200).json({
            data: data,
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message,
        });
    }
});

// Delete One users
router.post('/deleteone', async (req, res) => {
    try {
        let data = await User.deleteOne({
            name :'Mayur'
        });
        return res.status(200).json({
            data: data,
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message,
        });
    }
});

// Find One users by ID
router.get('/findbyid', async (req, res) => {
    try {
        let data = await User.findOne({
            _id: '676e8cee3040b9ddfe0850ea'
        })
        return res.status(200).json({
            data: data,
        });
    }
    catch (err) {
        return res.status(500).json({
            error: err.message,
        });
    }
});

// Find the user by ID and Update
router.post('/findbyidandupdate', async (req, res) => {
    try {
        let data = await User.findByIdAndUpdate({
            _id: '676e8cee3040b9ddfe0850ea'
        }, {
            email: 'omj@gmail.com'
        })
        return res.status(200).json({
            data: data,
        });
    }
    catch (err) {
        return res.status(500).json({
            error: err.message,
        });
}
});

// Find the user by ID and Delete
router.post ('/findbyidanddelete', async (req, res) => {
    try {
        let data = await User.findByIdAndDelete({
            _id: '676e8cee3040b9ddfe0850ea'
        })
        return res.status(200).json({
            data: data,
        });
    }
    catch (err) {
        return res.status(500).json({
            error : err.message,
        });
    }
});

// Find the user by ID and Remove
router.post('/findbyidandremove', async (req, res) => {
    try {
        let data = await User.findByIdAndRemove({
            _id: '676e8cff3040b9ddfe0850ed'
        });
        return res.status(200).json({
            data: data,
        })
    }
    catch (err) {
        return res.status(500).json({
            error: err.message,
        });
    }
    });

// Replacing one User Record
router.post('/replaceone', async (req, res) => {
    try {
        let data = await User.replaceOne({
            name: 'Mayur'
        }, {
            name: 'Mayur Panchal',
            email: 'Mayur@gmail.com',
            password: '123456',
        });
        return res.status(200).json({
            data: data,
        })
    }
    catch (err) {
        return res.status(500).json({
            error: err.message,
        });
    }
});

// Update one User Record
router.post('/updateone', async (req, res) => {
    try {
        let data = await User.updateOne({
            name: 'Mayur'
        }, {
            email: 'MayurPanchal@gmail.com',
        });
        return res.status(200).json({
            data: data,
        });
    }
    catch (err) {
        return res.status(500).json({
            error: err.message,
        });
    }
});

// Update many User Record
router.post('/updatemany', async (req, res) => {
    try {
        let data = await User.updateMany({
            name: 'Mayur Panchal'
        }, {
            name: 'Seenu',
        });
        return res.status(200).json({
            data: data,
        });
    }
    catch (err) {
        return res.status(500).json({
            error: err.message,
        });
    }
});

// Inserting Multiple Records from Backend
router.post('/insertmanyback', async (req, res) => {
    try {
        let data = await User.insertMany([
                {name :'Punam', email :'pooja@gmail.com', password : "123455"},
                {name :'Rau', email :'ram@gmail.com', password : "okmnhui"},
                {name :'Brijes', email :'bapu@gmail.com', password : "ns21ed"},
        ]);
        return res.status(200).json({
            data: data,
        });
    }
    catch (err) {
        return res.status(500).json({
            error: err.message,
        });
    }
});

// Inserting Multiple Records from User
router.post('/insertmany', async (req, res) => {
    let userdata = req.body;
    try {
        let data = await User.insertMany(req.body);
        return res.status(200).json({
            data: data,
        });
    }
    catch (err) {
        return res.status(500).json({
            error: err.message,
        });
    }
});



// Inserting Multiple Records from User and adding an extra field
router.post('/insertextra', async (req, res) => {
    let userdata = req.body;

    try {
        for (let i = 0; i < userdata.length; i++) {
            userdata[i].age = 25 + i;
        }
        // userdata = userdata.map((user) => ({
        //     ...user, age: age
        // }));
        let data = await User.insertMany(userdata);
        return res.status(200).json({
            data: data,
        });
    }
    catch (err) {
        return res.status(500).json({
            error: err.message,
        });
    }
});



// Find the user by ID and Adding new Address
router.post('/findbyidandadd', async (req, res) => {
    try {
        const {newAddress} = req.body;

        let data = await User.updateOne(
            { _id:"6773a2d9f2c4974a9caf9668"},
             {$push: {address: newAddress }}
            );

        return res.status(200).json({
            data: data,
        });
    }
    catch (err) {
        return res.status(500).json({
            error: err.message,
        });
}
});






module.exports = router;