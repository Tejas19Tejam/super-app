import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Register.module.css';
import { validateFormData } from './../../utils/helper';
import AppLogo from './../../ui/AppLogo';

function Register() {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';

	const error = useActionData();

	return (
		<div className={styles.box}>
			<div className={styles.boxLeft}>
				<div className={styles.headingBox}>
					<p className={styles.primaryHeading}>
						Discover new things on SuperApp
					</p>
				</div>
			</div>

			<div className={styles.boxRight}>
				<AppLogo />
				<p className={styles.accountAction}>Create your new account</p>
				<div className={styles.registerBox}>
					<Form className={styles.form} method='POST'>
						<div className={styles.inputBox}>
							<input
								type='text'
								name='name'
								required
								id='name'
								className={styles.input}
								placeholder='Name'
								// value={name}
								// onChange={(e)=>setName(e.target.value)}
							/>
						</div>
						<div className={styles.inputBox}>
							<input
								type='text'
								name='username'
								required
								id='username'
								className={styles.input}
								placeholder='UserName'
								// value={username}
								// onChange={(e)=>setUsername(e.target.value)}
							/>
						</div>
						<div className={styles.inputBox}>
							<input
								type='email'
								name='email'
								required
								id='email'
								className={styles.input}
								placeholder='Email'
								// value={email}
								// onChange={(e)=>setEmail(e.target.value)}
							/>
							<p className={styles.errorMessage}>
								{error?.email}
							</p>
						</div>
						<div className={styles.inputBox}>
							<input
								type='tel'
								name='phone'
								required
								id='phone'
								className={styles.input}
								placeholder='Mobile'
								// value={phone}
								// onChange={(e)=>setPhone(e.target.value)}
							/>
							<p className={styles.errorMessage}>
								{error?.phone}
							</p>
						</div>
						<div className={styles.checkBox}>
							<input
								type='checkbox'
								name='isAgreed'
								id='checkbox'
								className='inputCheckbox'
								// onChange={(e)=>setIsAgreed(e.target.checked)}
							/>
							<label htmlFor='checkbox'>
								Share my registration data with SuperApp
							</label>
							<p className={styles.errorMessage}>
								{error?.isAgreed}
							</p>
						</div>
						<Button>
							{isSubmitting ? 'Submitting...' : 'Sign Up'}
						</Button>
					</Form>
					<p className={`${styles.appTerms}`}>
						By clicking on Sign up. you agree to Superapp
						<strong> Terms and Conditions of Use</strong>
					</p>
					<p>
						To learn more about how Superapp collects, uses, shares
						and protects your personal data please head Superapp
						<strong> Privacy Policy</strong>
					</p>
				</div>
			</div>
		</div>
	);
}

export async function action({ request }) {
	const rowFormData = await request.formData();
	const formData = Object.fromEntries(rowFormData);

	// Filter form data before submitting - Remove whitespace , check mobile number , check all required fields are filed
	const { status, data } = validateFormData(formData);

	if (status === 'error') return data;

	localStorage.setItem('formData', JSON.stringify(data));
	return redirect('/category');
}

export default Register;
