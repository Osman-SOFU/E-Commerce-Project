// src/redux/actions/counterActions.js
export const increment = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: "INCREMENT",
      });
    }, 1000); // 1 saniye gecikmeli olarak arttırma işlemi
  };
};
