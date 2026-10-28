// Request/response contract for POST /api/parse, plus the browser helper.
import type { WireframeProject } from "@/lib/project/schema";
import { sampleProject } from "@/lib/project/sample";

export type ParseResponse =
  /** `notes`: short remarks for the user, e.g. shapes the parser skipped. */
  | { ok: true; project: WireframeProject; notes?: string[] }
  | { ok: false; error: string };

/** What the browser helper returns: the route's response, or a local cancel. */
export type ParseResult =
  | ParseResponse
  | { ok: false; error: string; cancelled: true };

/**
 * TEMPORARY stub until feature/frontend-backend-integration connects the real
 * POST /api/parse call. It ignores the image and resolves with the bundled
 * sample project after a short delay, honoring `signal` so cancel still works.
 */
export async function requestParse(
  image: File,
  signal?: AbortSignal,
): Promise<ParseResult> {
  void image;
  try {
    await wait(1200, signal);
  } catch {
    return { ok: false, error: "Cancelled.", cancelled: true };
  }
  return {
    ok: true,
    project: sampleProject,
    notes: ["Demo mode: the parse API isn't connected yet, so this is the sample project."],
  };
}

function wait(ms: number, signal?: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    if (signal?.aborted) return reject(signal.reason);
    const timer = setTimeout(resolve, ms);
    signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timer);
        reject(signal.reason);
      },
      { once: true },
    );
  });
}
