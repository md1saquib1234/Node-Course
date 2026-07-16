exports.getAddHome = (req, res, next) => {
  res.render('addHome', {pageTitle: 'Add Home to airbnd', currentPage: 'addHome'});
}