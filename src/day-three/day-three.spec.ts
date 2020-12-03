import { calcColissions, calcColissionsMultiple } from './day-three';
import dayThreeData from "./day-three.data";
test('day three part one', () => {

    const data = `..##.......
    #...#...#..
    .#....#..#.
    ..#.#...#.#
    .#...##..#.
    ..#.##.....
    .#.#.#....#
    .#........#
    #.##...#...
    #...##....#
    .#..#...#.#
    `;

    expect(calcColissions(data)).toEqual(7);
});

test('day three part two', () => {

    const data = `..##.......
    #...#...#..
    .#....#..#.
    ..#.#...#.#
    .#...##..#.
    ..#.##.....
    .#.#.#....#
    .#........#
    #.##...#...
    #...##....#
    .#..#...#.#
    `;

    expect(calcColissionsMultiple(data)).toEqual(336);
});