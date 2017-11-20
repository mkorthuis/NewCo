export function login(username, password) {
  if ((username === 'admin') && (password === 'admin')) {
    return {
      authenticated: true
    }
  } else {
    return {
      authenticated: false
    }
  }
};