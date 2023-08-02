import { createClient } from '@supabase/supabase-js'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default async function Index() {
  const supabase = createClient('https://xzftcyjydaluetnykbpk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZnRjeWp5ZGFsdWV0bnlrYnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0MzM0NTIsImV4cCI6MjAwNDAwOTQ1Mn0.DBkUMBrTym42HlOm7WtxoRCjxW0zXwEcLFaogB0UFHo');

  const { data: countries } = await supabase.from("countries").select();

  return (
    <div>
      <ul className="my-auto">{countries?.map((country) => (
        <li key={country.id}>{country.name}</li>
      ))}
    </ul>
    <p>show something</p>
    </div>
  );
}