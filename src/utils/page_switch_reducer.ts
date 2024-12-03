import { PageAction, PageActions, PageState } from "../models/page_switch_model";

export function pageSwitchReducer(state: PageState, action: PageAction): PageState {
    let currentState: PageState;
    switch (action.type) {
        case PageActions.INITIAL:
            currentState = {
                ...state,
                state: "initial",
            }
            break;
        case PageActions.PENDING:
            currentState = {
                ...state,
                state: "pending",
            }
            break;
        case PageActions.COMPLETED:
            currentState = {
                ...state,
                state: "completed",
            }
            break;
        default: throw new Error("sorry the action does not exist")
    }
    //@ts-expect-error available
    this.persist(currentState);
    return currentState;
}