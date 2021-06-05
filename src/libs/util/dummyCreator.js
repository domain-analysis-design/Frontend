import faker from "faker";
import shortid from "shortid";

export const createOtherUser = () => {
  return {
    UserList: new Array(20).fill().map((v, i) => ({
      name: faker.name.findName(),
    })),
  };
};
export const createOtherBoard = () => {
  return {
    boardList: new Array(20).fill().map((v, i) => ({
      ...createBoardInUser(),
    })),
  };
};
export const createUser = () => {
  return {
    // name : faker.random.word(),
    name: faker.name.findName(),
    boardList: new Array(5).fill().map((v, i) => ({
      ...createBoard(),
    })),
  };
};
export const createBoardInUser = () => {
  return {
    boardName: faker.random.word(),
    member: new Array(5).fill().map((v, i) => ({
      memberID: faker.name.findName(),
    })),
  };
};

export const createBoard = () => {
  return {
    id: shortid.generate(),
    boardName: faker.random.word(),
    lists: new Array(6).fill().map((v, i) => {
      if (i === 0) {
        return {
          columnIndex: i,
          cards: new Array(5).fill().map((v, i2) => ({
            columnIndex: i,
            cardIndex: i2,
            cardName: faker.random.word(),
            accept: false,
            id: shortid.generate(),
          })),
        };
      } else if (i === 5) {
        return {
          columnIndex: 5,
          cards: [
            {
              columnIndex: 5,
              cardIndex: 0,
              cardName: faker.random.word(),
              accept: false,
              id: shortid.generate(),
            },
          ],
        };
      }
      return {
        columnIndex: i,
        ...createList(i),
      };
    }),
    waitingCard: new Array(5).fill().map((v, i) => ({
      cardName: faker.random.word(),
      accept: false,
      id: shortid.generate(),
    })),
    member: new Array(5).fill().map((v, i) => ({
      memberID: faker.name.findName(),
    })),
  };
};

export const createList = (columnIndex) => {
  return {
    listName: faker.random.word(),
    cards: new Array(
      faker.datatype.number({
        min: 3,
        max: 7,
      }),
    )
      .fill()
      .map((v, i) => ({
        cardIndex: i,
        ...createCard(columnIndex),
      })),
  };
};

export const createCard = (columnIndex) => {
  return {
    columnIndex,
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
    desc: faker.lorem.paragraph(),
    checked: faker.datatype.boolean(),
  };
};

export const createComment = () => {
  return {
    desc: faker.random.word(),
  };
};
