import { id } from "@vendetta/plugin";
import { removePlugin } from "@vendetta/plugins";

export const onUnload = () => removePlugin(id);
