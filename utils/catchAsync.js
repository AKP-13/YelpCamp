// Pass in func, this returns a new function that has func executed and then passes any errors to next
module.exports = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  };
};
