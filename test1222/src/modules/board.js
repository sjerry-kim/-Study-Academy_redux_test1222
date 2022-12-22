// board 리듀서
//초기 값
const initalState = [
  {
    boardId: 1,
    userEmail: "green@green.com",
    title: "첫 게시물입니다",
    content: "문자만 들어갈 수 있는 공간입니다",
    view: 0,
    like: 1,
  },
  {
    boardId: 2,
    userEmail: "green@green.com",
    title: "두번째 게시글",
    content: "두번째 글입니다",
    view: 0,
    like: 1,
  },
];

let boardId = 3;

//리듀서 함수
function board(state = initalState, action) {
  switch (action.type) {
    case "deleteBoard":
      const newboardList = state.filter(
        (board) => board.boardId != action.payload
      );
      return newboardList;
    case "modifyBoard":
      const modifyboard = state.map((board) =>
        board.boardId == action.payload.boardId ? action.payload : board
      );
      return modifyboard;
    default:
      return state;
  }
}

export const deleteBoard = (id) => ({ type: "deleteBoard", payload: id });
export const modifyBoard = (board) => ({ type: "modifyBoard", payload: board });

export default board;
