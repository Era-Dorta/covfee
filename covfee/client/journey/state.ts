import { Store, Slice, configureStore, Action } from "@reduxjs/toolkit";
import React, { useState, useRef, useEffect, useContext } from "react";

import { NodeContext } from "./node_context";
import { JourneyContext } from "./journey_context";
import { useDispatch } from "react-redux";

export const useNodeState = <T>(slice: Slice) => {
  const nodeContext = useContext(NodeContext);
  const { socket } = useContext(JourneyContext);

  const reduxDispatch = useDispatch();

  const dispatch = (action: Action) => {
    socket.emit("action", { responseId: nodeContext.response.id, action });
  };

  React.useEffect(() => {
    if (socket) {
      socket.on("action", (action) => {
        console.log(action);
        reduxDispatch(action);
      });

      socket.on("state", (state) => {
        const action = { type: `${slice.name}/setState`, payload: state.state };
        console.log(action);
        reduxDispatch(action);
      });
    }
  }, [socket]);

  return {
    dispatch,
  };
};
