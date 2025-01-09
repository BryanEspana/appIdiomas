import { ValueOf } from "react-native-gesture-handler/lib/typescript/typeUtils";
import { Routes } from "../../navigators/routes";

export type RootStackParamList = {
    Public: undefined;
    Private: undefined;
  };
  
  export type PublicStackParamList = Record<ValueOf<typeof Routes.PUBLIC>, undefined>;

  export type PrivateTabParamList = Record<ValueOf<typeof Routes.PRIVATE>, undefined>;