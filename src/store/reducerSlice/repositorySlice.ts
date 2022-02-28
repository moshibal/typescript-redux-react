interface RepositoriesStata {
  loading: boolean;
  error: string | null;
  data: string[];
}
interface searchRepositoriesAction {
  type: "search_repositories";
}
interface searchRepositoriesSuccessAction {
  type: "search_repositories_success";
  payload: string[];
}
interface searchRepositoriesErrorAction {
  type: "search_repositories_error";
  payload: string;
}
type Action =
  | searchRepositoriesAction
  | searchRepositoriesSuccessAction
  | searchRepositoriesErrorAction;
const reducer = (
  state: RepositoriesStata,
  action: Action
): RepositoriesStata => {
  switch (action.type) {
    case "search_repositories":
      return { loading: true, error: null, data: [] };
    case "search_repositories_success":
      return { loading: false, error: null, data: action.payload };
    case "search_repositories_error":
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
export default reducer;
