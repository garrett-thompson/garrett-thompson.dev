import { useReducer } from "react";

export enum NavigationDirection {
  "forward" = "forward",
  "backward" = "backward",
}

export interface NavigationAction {
  page: PageLink;
}

export enum PageLink {
  Experience = "#experience",
  Skills = "#skills",
}

const pageOrder: PageLink[] = [PageLink.Experience, PageLink.Skills];

export function getNextPage(page: PageLink) {
  const currentIndex = pageOrder.findIndex((p) => p === page);
  return pageOrder[currentIndex + 1];
}

export function getPrevPage(page: PageLink) {
  const currentIndex = pageOrder.findIndex((p) => p === page);
  return pageOrder[currentIndex - 1];
}

interface State {
  page: PageLink;
  direction: NavigationDirection;
}

export function reducer(state: State, action: NavigationAction): State {
  const currentPagePosition = pageOrder.findIndex((p) => p === state.page);
  const nextPagePosition = pageOrder.findIndex((p) => p === action.page);

  const direction =
    nextPagePosition > currentPagePosition
      ? NavigationDirection.forward
      : NavigationDirection.backward;

  return { page: action.page, direction };
}

export function usePageNavigation() {
  const initialState: State = {
    page: PageLink.Experience,
    direction: NavigationDirection.forward,
  };

  return useReducer(reducer, initialState);
}
