$(document).ready(function() {
    console.log('Document is ready');
    const logoutForm = $('#user-logout');
    const deleteAccountForm = $('#user-account-delete');

    if (logoutForm.length) {
        logoutForm.submit(function() {
            return confirm('Are you sure you want to logout?');
        });
    }

    if (deleteAccountForm.length) {
        deleteAccountForm.submit(function() {
            return confirm('Are you sure you want to delete your account?');
        });
    }
});