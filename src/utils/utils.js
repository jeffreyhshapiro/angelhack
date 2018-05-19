const questions = ["Hello"]

export function isUserLoggedIn() {
    //check auth
    //if not authenticated, start the welcome talk

    if(authStatus()) {
        //some shit here
        return true
    } else {
        return false;
    }
}

export function onboardUser() {
    //eventually call to firebase
    return questions;
}

function authStatus() {

}

