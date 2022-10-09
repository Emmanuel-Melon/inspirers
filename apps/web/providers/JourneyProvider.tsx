import next from "next";
import React, { createContext, useReducer, useState } from "react";
import { journeyReducer } from "./reducer";
import { UPDATE_JOURNEY } from "./actions";

export const JourneyContext = createContext<any>(null);
export const JourneyConsumer = JourneyContext.Consumer;

type JourneyProps = {
  children: React.ReactChild | React.ReactChild[];
};

const initialState = {
  journey: {
    id: "",
    title: "",
    description: "",
    userId: ""
  }
};

export const JourneyProvider = ({
  children,
}: JourneyProps) => {
  const [state, dispatch] = useReducer(journeyReducer, initialState);
  const [blueprint, setBluePrint] = useState<string>("template");
  const onBluePrintChange = (value: string) => setBluePrint(value);


  return (
    <JourneyContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
};
