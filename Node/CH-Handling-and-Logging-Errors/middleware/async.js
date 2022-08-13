module.exports = function (handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (ex) {
      next(ex);
    }
  };
};

// When defining an Express route, we are not going to call the middleware function, we simply past an reference
// of the function
/* Eg.
    router.get("/another", (res, req, next) => {});
 */

// Here we past a function reference, we don't call it and past some arguments here like this :(res, req, next) => {}(......) .
//  It's the Express framework call the function, and pass the res, req, and next at runtime.

// So here we return an async function, and Express will call it automatically.