import {shallow} from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Test to component <GifGridItem/>', () => {
    const title = 'one punch GIF by Adult Swim';
    const url = 'https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=9ca6d3b12blk4snunf6e74rkyaojo7rnjoz33ldsx2mcr7ev&rid=giphy.gif&ct=g';

    let wrapper = shallow(<GifGridItem title={title} url={url}/>);

    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={title} url={url}/>);
    })

    test('Should display the component <GifGridItem/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
})