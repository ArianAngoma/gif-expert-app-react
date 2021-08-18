import {shallow} from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Test to component <GifGridItem/>', () => {
    let wrapper = shallow(<GifGridItem/>);

    beforeEach(() => {
        wrapper = shallow(<GifGridItem/>);
    })

    test('Should display the component <GifGridItem/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
})