import { createContext, useContext, useReducer } from "react";
import { Page, PageActions, PageState } from "../models/page_switch_model";
import { pageSwitchReducer } from "../utils/page_switch_reducer";


const initPage: Page | null = null;
const initState: PageState = {
    state: "initial"
}

export const QuizPageSwitchContext = createContext<Page | null>(initPage);

export function usePageSwitchContext() {
    const [pageState, disPatchAction] = useReducer(pageSwitchReducer, initState);

    const setPageState = (action: PageActions) => {
        disPatchAction({ type: action })
    }

    return {
        pageState,
        setPageState
    }
}

export function usePageSwitch() {
    const context = useContext(QuizPageSwitchContext);

    if (!context) throw new Error("Quiz context was use outside of quiz provider");
    return context;
}