import {shallow} from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Test to component <GifExpertApp/>', () => {
    let wrapper = shallow(<GifExpertApp/>);

    beforeEach(() => {
        wrapper = shallow(<GifExpertApp/>);
    })

    test('Should display the component <GifExpertApp/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
})