import { supabase } from "$lib/supabaseClient";

export async function load({ params }) {
  const { data: game, error } = await supabase
    .from("Games")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error) {
    throw error;
  }

  return {
    game
  };
}