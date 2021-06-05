export const Function1 = (item) => {
    let num = item.length;

    let initShow = new Array();

    for (var i = 0; i < num; i++){
        initShow[i] = false;
    }

    return initShow;
}

export const SaveBoardInLocal = (board) => {
    if (localStorage.getItem("currentBoard")) {
        console.log("이건?")
        localStorage.removeItem("currentBoard");
    }
    console.log("요건?")
    localStorage.setItem("currentBoard", JSON.stringify(board));
    
}