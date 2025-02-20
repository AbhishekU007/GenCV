import { supabase } from "@/lib/supabase";

export const saveResume = async (userId, resumeData) => {
  const { data, error } = await supabase
    .from("resumes")
    .insert([{ user_id: userId, content: resumeData }]);

  if (error) {
    console.error("Error saving resume:", error.message);
  }
  return data;
};
export const getUserResumes = async (userId) => {
    const { data, error } = await supabase
      .from("resumes")
      .select("*")
      .eq("user_id", userId);
  
    if (error) {
      console.error("Error fetching resumes:", error.message);
    }
    return data;
  };
  