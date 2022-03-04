exports.homepage = (req, res) => {
    res.render('homepage', {title: "Home Page"});
};

exports.projects = (req, res) => {
    res.render('projects', {title: 'Projects'})
};

exports.about = (req, res) => {
    res.render('about', {title: 'About Me'})
};

exports.contact = (req, res) => {
    res.render('contact', {title: 'Contact Me'})
};
