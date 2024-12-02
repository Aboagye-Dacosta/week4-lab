import { PageAction, PageActions, PageState } from "../models/page_switch_model";

export function pageSwitchReducer(state: PageState, action: PageAction): PageState {
    switch (action.type) {
        case PageActions.INITIAL:
            return {
                ...state,
                state: "initial",
            }
        case PageActions.PENDING:
            return {
                ...state,
                state: "pending",
            }
        case PageActions.COMPLETED:
            return {
                ...state,
                state: "completed",
            }
        default: throw new Error("sorry the action does not exist")
    }
}