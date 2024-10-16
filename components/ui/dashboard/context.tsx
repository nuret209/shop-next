import { createContext , Dispatch, SetStateAction, useContext} from "react";
interface DashboardContextType {
    timeId: number;
    setTimeId: Dispatch<SetStateAction<number>>;
    page: number;
    username: string;
    setPage: Dispatch<SetStateAction<number>>
  }
const DasboardContext = createContext<DashboardContextType>({
  timeId:0,
  setTimeId:() => null,
  page:0,
  setPage:() => null,
  
  username:""
});

export {
    DasboardContext,
    useContext
}