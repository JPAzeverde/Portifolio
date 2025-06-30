import type { ProjectProps } from "@/types/projectProps";

const SHEET_ID = "165kyZruWLFFaAzNppmPMdIPQcG0E-k2dw_Vo3gBloWk";
const SHEET_NAME = "PROJECTS_DATA"; // Nome da aba
const API_KEY = "AIzaSyBaFGU8TUmMc1LP_j7oLbmWICZcClaV4fE";

export async function fetchProjectsFromGoogleSheet(limit?: number): Promise<ProjectProps[]> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}!A2:E1000?key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  let values = data.values;
  if (!values) return [];

  // Garante que cada linha tenha 5 colunas
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
