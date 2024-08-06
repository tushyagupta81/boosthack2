const chapters = [
  {
    id: 1,
    title: "Chapter title",
    info: ["basic info on the chapter in 1-2 paras", "this is para 2"],
  },
  {
    id: 2,
    title: "2",
    info: [],
  },
];

const submodules = [
  {
    id: 1,
    // id of the chapter it belongs to
    chapterId: 1,
    title: "submodules title",
    info: ["intro to the submodules in 1-2 paras", "para 2"],
  },
  {
    id: 2,
    // id of the chapter it belongs to
    chapterId: 1,
    title: "submodule 2",
    info: [],
  },
];

const lessons = [
  {
    id: 1,
    // id of the submodule it belongs to
    submoduleId: 1,
    // id of the chapter it belongs to
    chapterId: 1,
    info: ["information in detail", "multiple paras"],
  },
  {
    id: 2,
    // id of the submodule it belongs to
    submoduleId: 1,
    // id of the chapter it belongs to
    chapterId: 1,
    info: ["information in detail", "multiple paras"],
  },
];

export default { chapters, submodules, lessons };
