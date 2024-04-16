import React, { useEffect }  from 'react';
import { FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import {SearchFormSchema} from './schemas/search-form-schema'
import {CustomInput } from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton';
import DisplayFormValues from './components/DisplayFormValues';
import { callEndpoint } from './services/call-endpoint';
import { Box } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';


export function SearchForm () {
	const [submitted, setSubmitted] = React.useState(false);
	const [studentFound, setStudentFound] = React.useState(false);
    const [approved, setApproved] = React.useState(false);
	const [error, setError] = React.useState(null);

	const {register,
		handleSubmit, 
		watch, 
		formState:{
		errors,isDirty,isValid
		}, reset
	} = useForm({
		defaultValues:{
			username:'',
			document:'',
			email:'',
			course:''
		},
		mode: 'onChange',
		resolver: yupResolver(SearchFormSchema)

	});

	const userNameWatch = watch('username');
	const documentWatch = watch('document');
	const emailWatch = watch('email');
	const courseWatch = watch('course');

	useEffect(() => {
		AOS.init();
	}, []);
	

    const onSubmit = async data => {
        try {
            const result = await callEndpoint(data);
			

            if (result.ok) {
                const approvedStudents = result.estudiantes_aprobados;
				console.log(approvedStudents);
                const studentFound = approvedStudents.find(student => student.estudiante.num_documento === data.document);
				console.log(studentFound);
                if (studentFound) {
                    setStudentFound(true);
                    setApproved(studentFound.aprobado);
                } else {
                    setStudentFound(false);
                }
            }
            reset();
            setSubmitted(true);
        } catch (error) {
            setError('Error de conexión con la API. Por favor, inténtalo de nuevo más tarde.',error);
        }
    };
	return (
		<Box data-aos="fade-up" data-aos-duration="1000" 
		sx={({
			bgcolor: 'white',
			borderRadius: '20px',
			boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
			p: '2rem',
			width: '80%',
			maxWidth: '600px',
			margin: '0 auto',
			textAlign: 'center',

		})}>
		<FormProvider {...{register, errors}}>
				<form onSubmit={handleSubmit(onSubmit)} >

				<CustomInput name='username' label='Nombre completo' required={true}/>
				<CustomInput name='document' label='Número de documento' required={true}/>
				<CustomInput name='email' label='Correo electrónico' required={true}/>
				<CustomInput name='course' label='Nombre del curso' required={true}/>
				<CustomButton isDirty={isDirty} isValid={isValid} type={'submit'} >
				    Consultar
				</CustomButton>
			</form>
		</FormProvider>
		{!submitted &&(
		<DisplayFormValues isDirty={isDirty} isValid={isValid} values={{ username: userNameWatch, document: documentWatch, email: emailWatch, course: courseWatch }} approved={approved} />
		)}
        {submitted && studentFound && (
            <>
                {approved && (
                    <p style={{ color: "green" }}>El estudiante aprobo el curso.</p>
                )}
                {!approved && (
                    <p style={{ color: "red" }}>El estudiante no aprobo el curso.</p>
                )}
            </>
        )}
        {submitted && !studentFound && (
            <p>No se encontró ningún estudiante con el número de documento proporcionado.</p>
        )}
		{error && (
			<p>{error}</p>
		)}
		</Box>

	);
}
export default SearchForm; 
