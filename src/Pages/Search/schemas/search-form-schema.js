
import * as yup from 'yup'

export const SearchFormSchema = yup.object({
    username: yup.string().required('Username es requerido'),

    document: yup.string().required('Número de documento es requerido').matches(/^\d+$/, 'Número de documento debe ser un valor numérico, sin espacios ni caracteres especiales').max(20, 'Número de documento no debe tener más de 20 caracteres'),

    email: yup.string().required('Correo electrónico es requerido').email('Correo electrónico debe tener un formato válido'),

    course: yup.string().required('Nombre del curso es requerido')
});
