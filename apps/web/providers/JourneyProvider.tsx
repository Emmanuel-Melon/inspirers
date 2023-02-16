import next from "next";
import React, { createContext, useReducer, useState } from "react";
import { journeyReducer } from "./reducer";
import { UPDATE_JOURNEY } from "./actions";

export const JourneyContext = createContext<any>(null);
export const JourneyConsumer = JourneyContext.Consumer;

export interface JourneyContextType {
  children: React.ReactChild | React.ReactChild[];
  value?: any;
}

const initialState = {
  journey: {
    id: "clcqvy7g90011dabtsv8rnzh4",
    title: "",
    description: "",
    userId: "cla6zxzxy098694btiqwmaixd",
  },
};

export const JourneyProvider = ({ children, value }: JourneyContextType) => {
  const [state, dispatch] = useReducer(journeyReducer, initialState);

  return (
    <JourneyContext.Provider
      value={{
        ...value
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
};
