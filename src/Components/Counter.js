import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./storeRedux/Postadd";
export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.instra.count);
  return (
    <div>
      <Button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </Button>
      <p>{count}</p>
      <Button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        _
      </Button>
    </div>
  );
}
