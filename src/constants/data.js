const data = [
  {
    id: 1,
    title: "post1",
    info: [
      "para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 ",
    ],
  },
  {
    id: 2,
    title: "post2",
    info: [
      "para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 ",
      "para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 ",
      "para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 ",
    ],
  },
  {
    id: 3,
    title: "post3",
    info: [
      "para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 ",
    ],
  },
  {
    id: 4,
    title: "post4",
    info: [
      "para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 ",
      "para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 ",
      "para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 ",
      "para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 ",
    ],
  },
  {
    id: 5,
    title: "post5",
    info: [
      "para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 ",
      "para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 ",
    ],
  },
  {
    id: 6,
    title: "post6",
    info: [
      "para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 ",
      "para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 ",
      "para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 ",
      "para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 para1 ",
    ],
  },
];

export default data;
