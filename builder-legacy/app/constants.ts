import { getConfig } from "./utils"; // Update the import path accordingly

export const baseUrl = "/builder/test/";
export const basePath = "." + baseUrl;

export const paths = getConfig().templates;
export const folders = getConfig().folders;
