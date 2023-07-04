import supabase, { supabaseUrl } from "./supabase";

export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  await supabase.auth.signOut();
}

export async function updateUser({ fullName, password, avatar }) {
  let updateUser;
  if (password) updateUser = { password };
  if (fullName) updateUser = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateUser);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: errorStorage } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (errorStorage) throw new Error(errorStorage.message);

  const { data: updatedUser, error: newError } = await supabase.auth.updateUser(
    {
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    }
  );

  if (newError) throw new Error(newError.message);
  return updatedUser
}
