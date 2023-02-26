const miscellaneous = require('./data/data');
const Book = require('./index');



const Defaultdata = () => {
    try {
        Book.insertMany(miscellaneous);

        console.log('Data added successfully');
    } catch (error) {
        console.log('error data', error.message);
    }
}

// export default Defaultdata;
export default Defaultdata;