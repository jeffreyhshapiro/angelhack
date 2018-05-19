const questions = [{
    message: "Hello there",
    id: 1,
    nextId: 2
}, {
    message: "How are you",
    id: 2,
    nextId: 3
}]

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

