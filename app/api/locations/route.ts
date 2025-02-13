import axios from "axios";
import * as cheerio from "cheerio";
export const dynamic = "force-static";

export async function GET() {
  // Navigate the page to a URL.
  const response = await axios.get("https://www.jesmaestates.com");
  const $ = cheerio.load(response.data);

  const data = $("select option")
    .map((index, element) => {
      return $(element).attr("value")?.trim();
    })
    .get().filter(x => !x || !x?.toLowerCase().includes("select"));

  return Response.json({ data });
}
