import { Box, Typography } from '@mui/material';

export const DisplayFormValues = ({isDirty, isValid,values}) => {
    return(
        <Box color="grey.600" mt="10px">
        {isDirty && isValid && (
            <>
                <Typography>Valida tu información antes de enviar:</Typography>
                <Typography>¿Nombre completo: {values.username} ? </Typography>
                <Typography>¿Número de documento: {values.document}? </Typography>
                <Typography>¿Correo electrónico: {values.email}? </Typography>
                <Typography>¿Nombre del curso: {values.course}? </Typography>
            </>
        )}
        </Box>
    );
}
export default DisplayFormValues;