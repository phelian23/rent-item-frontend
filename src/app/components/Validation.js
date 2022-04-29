const Validation = (user) => {
    let errors = {};

    if (!user.name) {
        errors.name = 'Name is required';
    }
    if (!user.email) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
        errors.email = 'Invalid email address';
    }
    if (!user.password) {
        errors.password = 'Password is required';
    }
    if (!user.password2) {
        errors.password2 = 'Confirm Password is required';
    } else if (user.password !== user.password2) {
        errors.password2 = 'Passwords must match';
    }

    return errors;
}

export default Validation