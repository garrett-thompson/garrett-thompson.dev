import { useReducer } from "react";

export enum NavigationDirection {
  "forward" = "forward",
  "backward" = "backward",
}

export interface NavigationState {
  numberOfPages: number;
  currentPageNumber: number;
  prevPageNumber: number;
}

type NavigationActionType = "go_forward" | "go_back";

export interface NavigationAction {
  type: NavigationActionType;
}

function getInitialState(numberOfPages: number): NavigationState {
  return {
    numberOfPages,
    currentPageNumber: 1,
    prevPageNumber: 0,
  };
}

export function reducer(
  state: NavigationState,
  action: NavigationAction
): NavigationState {
  switch (action.type) {
    case "go_forward":
      if (state.currentPageNumber === state.numberOfPages) return state;

      return {
        ...state,
        prevPageNumber: state.currentPageNumber,
        currentPageNumber: state.currentPageNumber + 1,
      };
    case "go_back":
      if (state.currentPageNumber === 1) return state;

      return {
        ...state,
        prevPageNumber: state.currentPageNumber,
        currentPageNumber: state.currentPageNumber - 1,
      };
    default:
      throw new Error("Unrecognized action");
  }
}

export function usePageNavigation(numberOfPages: number) {
  return useReducer(reducer, getInitialState(numberOfPages));
}
