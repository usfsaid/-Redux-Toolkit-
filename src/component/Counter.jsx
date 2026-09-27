import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../store/counterSlice.jsx";
import { login, logout } from "../store/authSlice.jsx";
import { useCallback, useEffect } from "react";

const Counter = () => {
  // selector state.vlaue , state.showCounter
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  const counterHandler = useCallback(
    (type, value) => {
      if (type === "increase") {
        dispatch(increase(value));
      } else {
        dispatch(decrease(value));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    counterHandler("increase", 5);
  }, [counterHandler]);

  const isLoggedIn = () => {
    return globalState.auth.isLoggedIn;
  };

  const loginHandler = (status) => {
    if (status) {
      dispatch(logout(5));
    } else {
      dispatch(login(5));
    }
  };

  return (
    <>
      <div className="app">
        <h1>Hello Redux Basic</h1>
        {isLoggedIn() && (
          <>
            <div>
              Counter:
              <span className="counter">{globalState.counter.value}</span>
            </div>
            <div>
              <button
                className="btn"
                onClick={() => counterHandler("increase", 5)}
              >
                Increase
              </button>
              <button
                className="btn"
                onClick={() => counterHandler("decrease", 5)}
              >
                Decrease
              </button>
            </div>
          </>
        )}

        <button className="btn" onClick={() => loginHandler(isLoggedIn())}>
          {isLoggedIn() ? "logout" : "login"}
        </button>
      </div>
    </>
  );
};

export default Counter;
