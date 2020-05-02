export class CredentialsService {

  static verifyCredentials(username, password) {
    if (CredentialsService.VALID_USERNAMES.indexOf(username) < 0) {
      return false;
    }

    if (password !== CredentialsService.VALID_PASSWORD) {
      return false;
    }

    if (CredentialsService.isLockedOutUser(username)) {
      console.log("User is locked")
      return true;
    }

    window.sessionStorage.setItem(STORAGE_KEY, username);
    return true;
  }

  static getLoggedInUser() {
    var user = window.sessionStorage.getItem(STORAGE_KEY);
    console.log("Loggedin user: " + user)
    return user;
  }

  static isLockedOutUser(username) {
    return username === LOCKER_OUT_USER;
  }

  static isProblemUser() {
    return window.sessionStorage.getItem(STORAGE_KEY) === BUGGY_USER;
  }

  static isPerformanceGlitchUser() {
    return window.sessionStorage.getItem(STORAGE_KEY) === SLOW_USER;
  }

  static resetSession() {
    window.sessionStorage.removeItem(STORAGE_KEY);
    // CredentialsService.notify();
  }

  static registerListener(handler) {
    CredentialsService.LISTENERS.push(handler);
  }

  static notify() {
    CredentialsService.LISTENERS.forEach((listener) => {
      listener.forceUpdate();
    });
  }
}

const STORAGE_KEY = "session-username"

const NORMAL_USER = "dino"
const BUGGY_USER = "buggy"
const SLOW_USER = "turtle"
const LOCKER_OUT_USER = "locked"

CredentialsService.VALID_USERNAMES = [
  NORMAL_USER,
  BUGGY_USER,
  SLOW_USER,
  LOCKER_OUT_USER
];

CredentialsService.VALID_PASSWORD = "choochoo";

CredentialsService.LISTENERS = [];

