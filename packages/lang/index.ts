import enUS from "./en-US";
import zhCn from "./zh-CN";
import daDK from "./da-DK";

export type Lang = "ZH-cn" | "En" | "DK-da";

export const Local: { [K in Lang]: { [key: string]: string } } = {
  En: enUS,
  "ZH-cn": zhCn,
  "DK-da": daDK,
};
