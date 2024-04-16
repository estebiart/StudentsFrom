import { cleanup, render,screen, waitFor } from "@testing-library/react";
import SearchForm from "../Pages/Search/SearchForm";
import userEvent from "@testing-library/user-event";
import { SearchFormMock, SearchFormMockError } from "../_mocks_/SearchForm.mock";
import axios from 'axios';


jest.mock("axios");
jest.mock('../Pages/Search/components/DisplayFormValues.jsx', () => ({ 
    __esModule: true, 
    default: () => <div>Mocked Display</div>

}));

describe('SearchForm', () => {
    afterEach(cleanup);
    afterEach(jest.clearAllMocks);
    beforeEach(() => {
        axios.get.mockResolvedValue({ data: SearchFormMock });
        render(<SearchForm/>);
    });
                    
     it('should two input exists at the screen', async() => {

        const usernameInput = screen.getByRole('textbox', { name: /Nombre completo/i});
        const documentInput= screen.getByRole('textbox', { name: /Número de documento/i});
        const submitButton = screen.getByRole('button', { name: /Consultar/i });

        expect(usernameInput).toBeInTheDocument() ;
        expect(documentInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        expect(usernameInput).toHaveValue("") ;
        expect(documentInput).toHaveValue("") ;
        expect(submitButton).toBeDisabled();

     });  
      

     it('should disable the submit button if the form values are invalid', async() => {
        const usernameInput = screen.getByRole('textbox', { name: /Nombre completo/i});
        const documentInput= screen.getByRole('textbox', { name: /Número de documento/i});
        const submitButton = screen.getByRole('button', { name: /Consultar/i });
    
        await userEvent.type(usernameInput, SearchFormMockError.name);
        await userEvent.type(documentInput, SearchFormMockError.document);
    
        await waitFor(() => {
            expect(usernameInput).toHaveValue(SearchFormMockError.username) ;
            expect(documentInput).toHaveValue(SearchFormMockError.document) ;
            expect(submitButton).toBeDisabled();
            });
     });  
 

     it('should  mock displayfrom values', () => {     
        expect(screen.getByText('Mocked Display')).toBeInTheDocument();
     });           
});
