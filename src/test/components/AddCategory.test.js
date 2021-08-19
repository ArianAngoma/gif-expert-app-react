import {shallow} from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Test to component <AddCategory/>', () => {
    // Funcion de jest
    const setCategories = jest.fn();

    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Should display the component <AddCategory/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should change the text box', () => {
        const input = wrapper.find('input');

        // Valor que se envía a la caja de texto
        const value = 'Hola Mundo';

        // Simular cambio en la caja de texto
        input.simulate('change', {target: {value}});
    });

    test('Should not send the form', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault() {
            }
        });

        // setCategories no se debería de haber llamado porque no se envía nada el input text
        expect(setCategories).not.toHaveBeenCalled();
    })
})