import { id } from "@vendetta/plugin";
import { removePlugin } from "@vendetta/plugins";

export const onLoad = () => removePlugin(id);
