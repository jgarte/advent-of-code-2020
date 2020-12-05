let input = [
  '....#...............##...#...#.',
  '#...#..#.....##.##.#.##....#...',
  '...#.....#...#.................',
  '#..#..#.......#...#.#..........',
  '...##..#.#..........##...#.....',
  '........###.#.##..#............',
  '...###......##.#..#.#...#.#....',
  '......##..#.#....#...#.........',
  '.................#......#......',
  '..............##....#..........',
  '#.....................#...#.#.#',
  '.##..#............##...##.##..#',
  '.....#.####...#..##......#.#..#',
  '#.......#.#..#......##.#.#....#',
  '.....##...###.#..........##....',
  '#...........#.##....##.....#..#',
  '..###..##.##.....#....#........',
  '...#.#.#............#.#..#....#',
  '#......#....#...##.#.#.#.#..#..',
  '.......#.#...#..#..#..##......#',
  '.....#..#.............#..#...#.',
  '##..#.##.....#........#........',
  '....##....#..#...........#...#.',
  '.......#........##.......##....',
  '..##...#.......#........##.#...',
  '..........#..#.....##........#.',
  '..#..##..#............#........',
  '.#.#...#...#.......#......#....',
  '....#....#.....#.#.........###.',
  '.............#...#....#..#.#...',
  '##.#...#..#......#.#.##.....#..',
  '#...##.#..........#..#.#...#...',
  '#####.......#.#.....#..#.......',
  '#...#...#........#....#...#....',
  '......##.#..#..#............#..',
  '....#....#.......#...###.......',
  '.#......##...#.##....#...#.....',
  '..#....#...##.....#.#...##.#...',
  '#.......#........#.####........',
  '#.##..#..#.........#.#........#',
  '.#...#.#.#.#......#....#.#..#..',
  '#...####...##.##.#....#......##',
  '..#...#......##........#.....#.',
  '...#.#....##...................',
  '...##................#.........',
  '...##.....##........#....#..#..',
  '.........#..#.....#............',
  '.#..#.......................#..',
  '.#.........#..##........#.#.#.#',
  '......#.....##..#.##...#..#.##.',
  '..#..............##.......#....',
  '...............##....#...##..#.',
  '###...#..###.........#...#.....',
  '...#..#...#....#.....##........',
  '....#..##...#........#.........',
  '..#......#.......#.....#..#....',
  '.#...........##.....###....#...',
  '.#..#.....##.........##.....#..',
  '....##.#.....#................#',
  '..#..#......#.#..#....#..##....',
  '#.....#...##............#......',
  '.#.............#....#.......#..',
  '#.........#..#...##.#...#.#.##.',
  '...#......#..####....#.#.....#.',
  '......#........#..........##.##',
  '......##.#..##.##.....#........',
  '##.....#..##.##..#.......##....',
  '.##.........#...........#...#..',
  '.....#...###..#...#...........#',
  '..........#.#......#.###.....#.',
  '...#.............#.##......##..',
  '#.##.........#..###...........#',
  '....#..##....#..#..#........###',
  '...#........##.......##..#..#..',
  '...#......#..#.#...............',
  '#......###....#.#..#.#..#....#.',
  '#.#.####.#.........#..#.#.#....',
  '.....#....#...............#...#',
  '.#........#......#.#...#.......',
  '................#...#.....##...',
  '.............#...####..........',
  '.................##....##.###..',
  '#................#......#......',
  '.###.#........#..##.....#..###.',
  '..#.#..#...#..#.#...#.#.....#.#',
  '.....#............#..##..#..#.#',
  '#........##.#...#.....#........',
  '#.#.#..###......###............',
  '...#..#...........##...#.....#.',
  '......#........#...#.#....#....',
  '....#..........#.#..#.#....##..',
  '...#.....##..#......#.#.##...#.',
  '.........#..#................#.',
  '..#....#.##.....#.......#......',
  '...#.....#.......##.##.....#...',
  '#...#..............#..###..#...',
  '#.#......#.#....#........##..#.',
  '...#...##...##..#.........#....',
  '..#...#......##.#.#.#....##....',
  '#.......#.......#..#..#........',
  '.........#..#.....#....#.....##',
  '.#......#.......#.#..#..#...#.#',
  '..#....#.#..#..................',
  '#.....####..........#.#.....#.#',
  '.#..#.#.#....#.#.....#.#.......',
  '....##......#..#.....#.#.#...#.',
  '...##...#......##.#....##.#....',
  '..#..##....#...#...........#...',
  '.......#........#...##.#.......',
  '#.#..#....##.#....##...........',
  '.......#............#..##..##..',
  '#.#.#.....#....##.#.#.#.....#..',
  '##...#...#.......#..#...#.....#',
  '##..##.##..........#........##.',
  '..............#.....#..#..##...',
  '.......#...#.........#....#.#..',
  '...#..#..#....#.#....##........',
  '..#.......#....#....##.........',
  '#...#.....#..#.#...##....#.....',
  '.....##..#..##..#..............',
  '.....##............#....#.#....',
  '..#.....#....##.#.....#..#.....',
  '#...#..#..#......#.#.#..##.....',
  '.............................##',
  '#...#.#................#....#.#',
  '.#.#.#....##......###..##......',
  '#.....#..#.##.#.#.##...###.....',
  '.........#............##..#....',
  '.#..#...#....#.....#.#........#',
  '...............#......#..#.....',
  '...................###........#',
  '.###..##..##.......#.#.........',
  '#.........#......#....#.#...#..',
  '.#.#....#.......#.#..##...##...',
  '.#.....#....##.......#.#.....#.',
  '.........#...#....#.#..........',
  '....###..#..##.#...##....#..#..',
  '...#.#..##.#.........###.#..#..',
  '#...#...........#....#.........',
  '....##...........#.#.#......###',
  '#....#...........##..#.........',
  '###....#.....#.......#....###..',
  '.#.......#....#.#.#.#......#.#.',
  '........#...............#.#.#..',
  '....#.........#.....#...##.##.#',
  '...#............#.............#',
  '..........#..#.................',
  '........#.....##............#.#',
  '..#...##........#...#.....#.#..',
  '....#........#.#.#..........#..',
  '#.#...#...........#............',
  '....#.#...##...........#.....#.',
  '...........#.#..#.....#........',
  '.....#..#..#..#.....#.#.....#.#',
  '#.....#.......#.......#...#....',
  '#.........#....#.#........#..#.',
  '...#..#.........#.....#..#.....',
  '...#..#.............#..........',
  '.#.......#..........#.....#...#',
  '.....#.#......#.......#....#...',
  '...#.....#..#..##....##....#...',
  '.#.#.#..#...#.....#....#.......',
  '..##.#..........#.....#.#......',
  '..#..#.............#...##..##..',
  '.#.............#..#....##...#..',
  '..#...#.....#.................#',
  '..##.......#.....#...#....#....',
  '.#..#.##.........#...#.#...#...',
  '...##.......##..#.....##.##...#',
  '........####.#.........#.......',
  '..#.#...##.#..#..#.......##.#..',
  '.#..#............###..#..#.....',
  '#.....#.#...#.#.......#........',
  '..........#......#.#...#...#...',
  '..#......#..#..#.#...#.........',
  '..###........#.#....#.#...##...',
  '.#.....#..#.#......#........#..',
  '.#...#..#...#....#.......#..#..',
  '..#....#..#.....#.#........#...',
  '#..#.#.........#..........#..#.',
  '.#.....##....#.........#.#.#.#.',
  '#.#...#.....#.#.#....#.#..#....',
  '.........#...................#.',
  '..#.....#..##...#..........#.#.',
  '..............#....#.........#.',
  '.#....#.....#..............##..',
  '#...#...#.#........##.........#',
  '....###....#.#....#.#.........#',
  '.....#........#.....##.........',
  '.#...##..##..#.........##......',
  '............#.....#........#...',
  '..#....#.......#......#..#.#.#.',
  '#.......#.#...........#..##.#..',
  '......#.##......#....#.......#.',
  '.....#........#...###.....#....',
  '###..........#........#.#.#....',
  '.....#...#.#...#...#...##.....#',
  '.##...#.#........#.#....#......',
  '......#.........#.....#.#......',
  '.....#.##.....###.#...#...##..#',
  '.#.#.......##....#..#..#.##....',
  '.####...###.#.#.#.#............',
  '......#..##...#..........#.##.#',
  '......#............#...........',
  '.....#.#..#.......##...##......',
  '......#........#..#....#.#.#.#.',
  '#..#..#.....#..#.....#.......#.',
  '.#...#.....#..............#....',
  '.#....#..#.##.#............####',
  '..........#....#.##...#.#......',
  '...#.#.#.#.#.......#.........#.',
  '##........#..##..#.........#...',
  '..#......#...#..#.#.....#......',
  '..#.#......#...#...#.#.........',
  '........................##.....',
  '...#.##.#........#...#.......#.',
  '..#.#......#....##........#.#..',
  '#......#.##........#..#......#.',
  '.....#..#..#.............#.....',
  '......#......#........#....#...',
  '...#....###.....#..#.#....#....',
  '#.......................#....#.',
  '..#...#...................#....',
  '....#..#.....##.#..#...#.....#.',
  '...#.........#...#.......#.....',
  '..#....#.....#...#...#.#####...',
  '.....####......#...........#...',
  '......#.#..........#...#.#.#..#',
  '###..#.#....#..#...............',
  '...#...###..#..#.#.#...........',
  '.....#...#.##.#.#.###..##......',
  '.........#...........#....##.#.',
  '....#..#......#................',
  '...........#..#..#...#.#.......',
  '..#.....#......##.###..........',
  '.........#...................#.',
  '..........#...#.#....##........',
  '..#...##....#....#.......#...##',
  '#......#.....#...#...#...#.....',
  '....##...#.#.......#.#...##....',
  '...#.....#....#.....#....#.....',
  '#....##.....##..##..........##.',
  '.....#.....#.#.#...............',
  '.#.##....#.....#.#..#....#..##.',
  '.....#.#.....##....#...........',
  '.........#..#.......##..##.....',
  '..#....##.....###...#....#.#...',
  '............#......#.#...#..#..',
  '#..##......#.#.##....#.#.......',
  '.#.#.....#...#.#.#....#.....#..',
  '#....#..#.#....#...#...........',
  '......#.#.....#...#.#.#......#.',
  '###..#....#.###.............#..',
  '..............#####........###.',
  '..#..#.#.#.#......#......#.....',
  '###.........#.#..........#..#.#',
  '.#.........#...#......####.....',
  '..#.......####..#....#...#..#..',
  '#.#..#.#...............#.#.#.#.',
  '###....#.....##.#....#......##.',
  '..#..#........#....###.#.#.....',
  '...#.#..........#.....#...#....',
  '....#......##.#............#..#',
  '...##...#.....#..##....#..#.#.#',
  '.......#.....#..#....#....##.#.',
  '.#..#....#..#......##....##...#',
  '..#......#...#.#..###..#.##....',
  '#...#.....#......##...#.......#',
  '.....#.#.....#...##............',
  '.#..##.##..#..##.#........#....',
  '....#.#......##...#.#.#.#..##..',
  '.#..............##........#....',
  '.##....#..#..#....#...#......#.',
  '............###....##.......##.',
  '..............####.....#.......',
  '........##..##.#...#.......#...',
  '....#..#.....##.......#####...#',
  '.##..##..#.....#...#..#..#....#',
  '##..#.#.#...........#..........',
  '#..#......#...#....#...........',
  '...#..##.#..........#..#.......',
  '........#.#.....#......##......',
  '.....#....#............#.......',
  '.#.#..#....##......#.......###.',
  '.#..#.#........#......#...##..#',
  '...#....#......#..#........#.##',
  '.........#..#...#..#.#.##......',
  '....###.#...........#...#......',
  '.##............#.......#..##...',
  '##...#.#...............#.#...##',
  '..#..#.....#.#..#..#...........',
  '..#..#.##..#......#.##..#.#....',
  '..#...#......#.#...#....##.#...',
  '...###....####......#....#...#.',
  '.......##........#.....##....#.',
  '.........##..........#...#.....',
  '.....#............#.##.#....#.#',
  '..........#...#....##..........',
  '....................#......#...',
  '#......#..#...#.............##.',
  '...........#...................',
  '..#...#.........#.##.#..##.#...',
  '#.#....#.#.....#............#..',
  '.#..#.....#.....####......#.#..',
  '#....#.......##..#...........#.',
  '............#...#.....#..#.#...',
  '#...........#...#####....#...#.',
  '..........#...###..##.........#',
  '#.....###............#..#..#.#.',
  '...##.....#....#......#.....#..',
  '#....#.......#..#......###...#.',
  '...##.##......##..##..........#',
  '.......#.#..#.#..#.#.#.#..#..#.',
  '..#..###...#....#.....#......#.',
  '...#.........#..#.##.#.....###.',
  '..#.........#.##.#..#..#..###..',
  '..####..#.........#.........#.#',
  '..#.#...#.......#....##........',
  '.#......#.#....................',
  '..........#.......#.#..#..#....',
  '..#........#....#.#..#.........',
  '..#.....#.............#....#...',
  '##...#.........#.....#...#.....'
];

function part1(input) {
  return traverse(input, 3, 1);  
}

function part2(input) {
  let result = 1,
    slopes = [
      [1, 1],
      [3, 1],
      [5, 1],
      [7, 1],
      [1, 2],
    ];

  slopes.forEach(slope => {
    let [right, down] = slope;
    result *= traverse(input, right, down);
  });
  return result;
}

function traverse(input, right, down) {
  col = 0,
  row = 0,
  width = input[0].length,
  treeCount = 0;

  while(row < input.length) {
    if(input[row][col] === '#') {
      treeCount++;
    }
    // compute slope
    col = (right + col) % width;
    row += down;
  }

  return treeCount;
}

console.log('Day 3');
console.log('------------------------');
console.log(`part1: ${part1(input.slice())}`);
console.log(`part2: ${part2(input.slice())}`);
console.log('');