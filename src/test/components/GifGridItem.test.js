import {shallow} from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Test to component <GifGridItem/>', () => {
    const title = 'one punch GIF by Adult Swim';
    const url = 'https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=9ca6d3b12blk4snunf6e74rkyaojo7rnjoz33ldsx2mcr7ev&rid=giphy.gif&ct=g';

    let wrapper = shallow(<GifGridItem title={title} url={url}/>);

    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={title} url={url}/>);
    });

    test('Should display the component <GifGridItem/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should have a paragraph with the title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Should have the image equal to the url and alt', () => {
        const img = wrapper.find('img');
        // console.log(img.props().src);
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Should have animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
})