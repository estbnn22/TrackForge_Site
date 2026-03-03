import { redirect } from "next/navigation";

const APP_STORE_URL = "https://apps.apple.com/us/app/trackforge/id6759009365";

export default function DownloadPage() {
  redirect(APP_STORE_URL);
}
