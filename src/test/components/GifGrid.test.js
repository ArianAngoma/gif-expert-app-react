import {shallow} from "enzyme";
import GifGrid from "../../components/GifGrid";
import {useFetchGifs} from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Test to component <GifGrid/>', () => {
    const category = 'Anime'

    test('Should display the component <GifGrid/> correctly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show items when loading images useFetchGifs', () => {
        const gifs = [{
            id: 'ayMW3eqvuP00o',
            title: 'No Face GIF by Spirited Away',
            url: 'https://giphy.com/gifs/spirited-away-no-face-ayMW3eqvuP00o'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
})