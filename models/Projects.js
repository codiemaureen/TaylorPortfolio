const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'You must name your project']
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'You must leave a project description']
    },
    slug: String,
});

projectSchema.pre('save', function(next){
    if(!this.isModified('name')) {
        return next();
    }
    this.slug = slug(this.name);
    next();
})

module.exports = mongoose.model('Projects', projectSchema);