import {getGifs} from '../../helpers/getGifs';

describe('Test to getGifs Fetch', () => {
    test('Should have 10 items', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    })

    test('Should have 0 items', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
})