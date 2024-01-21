// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str
    );

// https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/
const isValidEmail = (str) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(str);

// Filter form data before submitting
export function validateFormData(rowFormData) {
    const errorObject = {};

    // 1. Trim all values of  form
    const trimmedArray = Object.entries(rowFormData).map(([key, value]) => [
        key,
        value.trim(),
    ]);

    const formData = Object.fromEntries(trimmedArray);

    // 3. Check isAgreed is checked
    if (!formData?.isAgreed)
        errorObject.isAgreed =
            'Please check on agree before submitting the form';

    if (!isValidPhone(formData.phone))
        errorObject.phone = 'Phone number is not valid !';

    // 4 Check email is valid
    if (!isValidEmail(formData.email))
        errorObject.email = 'Please provide valid email address';

    // If form data is valid then send the data
    if (Object.keys(errorObject).length === 0)
        return { status: 'ok', data: formData };

    // If some error then send the errorObject
    return { status: 'error', data: errorObject };
}

