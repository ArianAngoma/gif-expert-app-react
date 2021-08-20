import {renderHook} from "@testing-library/react-hooks";
import {useFetchGifs} from "../../hooks/useFetchGifs";

describe('tests on the hook useFetchGifs', () => {
    test('Should return the initial state', () => {
        const {result} = renderHook(() => useFetchGifs('One Punch'));
        const {data, loading} = result.current;
        console.log({data, loading});

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
});