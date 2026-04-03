import { logVerbose, shouldLogVerbose, warn, danger } from "../globals.js";
import { getLogger } from "../logging/logger.js";
import { runTasksWithConcurrency } from "../utils/run-with-concurrency.js";

export async function runWithConcurrency<T>(
  tasks: Array<() => Promise<T>>,
  limit: number,
): Promise<T[]> {
  const { results } = await runTasksWithConcurrency({
    tasks,
    limit,
    onTaskError(err) {
      const msg = `Media understanding task failed: ${String(err)}`;
      // Always log at warn level so users can see failures without verbose logging
      try {
        getLogger().warn({ message: msg }, "media-error");
      } catch {
        console.error(danger(msg));
      }
    },
  });
  return results;
}
