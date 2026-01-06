import { getSystemDateTimeTool } from "./get-system-date-time.tool.ts";
import { readFileTool } from "./read-file.tool.ts";
import { writeFileTool } from "./write-file.tool.ts";

export const tools = {
  get_system_date_time: getSystemDateTimeTool,
  read_file: readFileTool,
  write_file: writeFileTool,
};
