import { supabase } from "$lib/supabaseClient";

export async function load() {

  const { data } = await supabase
    .from("Games")
    .select("*")
    .order("id", { ascending: true });

  return {
    games: data ?? [],
  };
}

/**
* @param {string} email
* @param {string} password
*/

async function signUpUser(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error(error.message);
    return;
  }

  console.log(data.user);
}
