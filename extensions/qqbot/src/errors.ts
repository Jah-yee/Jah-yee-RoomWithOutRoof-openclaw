export const QQBOT_SETUP_DOCS_URL = "https://docs.openclaw.ai/channels/qqbot";

export const QQBOT_CONFIG_MISSING_MESSAGE =
  "QQBot not configured. Set QQBOT_APP_ID and QQBOT_CLIENT_SECRET (or run `openclaw configure`).";

export function withQQBotSetupDocs(message: string): string {
  return `${message} See ${QQBOT_SETUP_DOCS_URL}`;
}
