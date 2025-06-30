import type { CardNewsProps } from "@/types/cardNewsProps";

const SHEET_ID = "165kyZruWLFFaAzNppmPMdIPQcG0E-k2dw_Vo3gBloWk";
const SHEET_NAME = "NEWS_TABLE"; // ou o nome que você deu à aba
const API_KEY = "AIzaSyBaFGU8TUmMc1LP_j7oLbmWICZcClaV4fE";

export async function fetchNewsFromGoogleSheet(): Promise<CardNewsProps[]> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}!A2:E100?key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  const values = data.values;

  if (!values) return [];

  return values.map((row: string[]) => ({
    title: row[0],
    link: row[1],
    date: row[2],
    author: row[3],
    description: row[4],
  }));
}
