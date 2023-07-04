import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vbzavkkfkumogjcqsoxe.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZiemF2a2tma3Vtb2dqY3Fzb3hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc3OTM0NzYsImV4cCI6MjAwMzM2OTQ3Nn0.P8dF9k83uClMZh8iWHf6k7N7axsYXiPuE_YOOcy_XnE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
