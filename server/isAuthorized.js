module.exports = isAuthorized = (id, params) => {
  if (id !== parseInt(params)) {
    return false
  } else {
    return true
  }
  }
