import type { ProjectProps } from "@/types/projectProps";

const SHEET_ID = "165kyZruWLFFaAzNppmPMdIPQcG0E-k2dw_Vo3gBloWk";
const API_KEY = "AIzaSyBaFGU8TUmMc1LP_j7oLbmWICZcClaV4fE";

export async function fetchProjectsFromGoogleSheet(sheetName: string = "PROJECTS_DATA", limit?: number): Promise<ProjectProps[]> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheetName}!A2:E1000?key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  let values = data.values;
  if (!values) return [];

  values = values.map((row: string[]) => {
    while (row.length < 5) row.push("");
    return row;
  });

  if (limit) {
    values = values.slice(-limit);
  }

  return values.map((row: string[]) => ({
    image: row[0],
    title: row[1],
    description: row[2],
    date: row[3],
    link: row[4],
  }));
}