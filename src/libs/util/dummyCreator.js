import faker from "faker";

export const createUser = () => {
  return {
    // name : faker.random.word(),
    name: faker.name.findName(),
    boardList: new Array(5).fill().map((v, i) => ({
      ...createBoard(),
    })),
  };
};
export const createBoardInUser = () =>{
  return{
    boardName : faker.random.word(),
    member : new Array(5).fill().map((v,i) => ({
      memberID : faker.name.findName()
    }))
  }
}

export const createBoard = () => {
  return {
    boardName: faker.random.word(),
    list: new Array(5).fill().map((v, i) => ({
      ...createList(),
    })),
    waitingCard: new Array(5).fill().map((v, i) => ({
      ...createCard(),
    })),
    // member: new Array(5).fill().map((v, i) => ({
    //   ...createUser(),
    // })),
  };
};

export const createList = () => {
  return {
    listName: faker.random.word(),
    cards: new Array(5).fill().map((v, i) => ({
      ...createCard(),
    })),
  };
};

export const createCard = () => {
  return {
    cardName: faker.random.word(),
    items: new Array(5).fill().map((v, i) => ({
      ...createItem(),
    })),
    comments: new Array(5).fill().map((v, i) => ({
      ...createComment(),
    })),
  };
};

export const createItem = () => {
  return {
    desc: faker.random.word(),
    checked: faker.datatype.boolean(),
  };
};

export const createComment = () => {
  return {
    desc: faker.random.word(),
  };
};
