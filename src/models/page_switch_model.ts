export type PageState = {
    state: "initial" | "pending" | "completed";
}

export enum PageActions { INITIAL, PENDING, COMPLETED }

export type PageAction = | { type: PageActions.INITIAL } | { type: PageActions.PENDING } | { type: PageActions.COMPLETED };

export type Page = {
    pageState: PageState;
    setPageState(action: PageActions): void;
}

