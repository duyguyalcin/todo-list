import mongoose from 'mongoose';

const gorevSchema = new mongoose.Schema({
    mission: String,
    completed: {
        type: Boolean,
        default: false
    }

});
const Gorev = mongoose.model('Gorev', gorevSchema )

export default Gorev;