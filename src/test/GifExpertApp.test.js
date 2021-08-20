import {shallow} from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Test to component <GifExpertApp/>', () => {
    const categories = ['One Punch', 'Anime'];
    let wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

    beforeEach(() => {
        wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
    })

    test('Should display the component <GifExpertApp/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should show a list of categories', () => {
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
})