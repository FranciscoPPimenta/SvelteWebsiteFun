import { supabase } from "$lib/supabaseClient";

export async function load() {

  const { data } = await supabase
    .from("Games")
    .select("*");

  return {
    games: data ?? [],
  };
}