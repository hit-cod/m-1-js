let message = prompt('Enter password');
const ADMIN_PASSWORD = 'yourpass';

if (message === null) {
    message = 'Canceled by user';
} else if (message === ADMIN_PASSWORD) {
    message = "Welcome";    
} else {
    message = 'Access denied';
}

alert(message);