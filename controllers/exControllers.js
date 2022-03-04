exports.homepage = (req, res) => {
    res.render('homepage', {title: "Home Page"});
};

exports.projects = (req, res) => {
    res.render('projects', {title: 'Projects'})
};
