export default FirebaseFriendlyErrorMessage = (errorCode) => {
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'The email address format is incorrect or the field is empty. Please Verify your email.';
        case 'auth/user-disabled':
            return 'This user has been disabled. Please contact support.';
        case 'auth/user-not-found':
            return 'There is no user corresponding to this email. Verify your email or Sign up to access the app';
        case 'auth/wrong-password':
            return 'The password is invalid for the given email.';
        // Add more cases as needed
        default:
            return 'An unexpected error occurred. Please try again.';
    }
};