import { headers } from 'next/headers'
import { supabase } from '../../lib/initSupabase'

export const metadata = {
    title: 'Country List',
    description: 'Names of different countries',
  }

export default async function Index() {
    const {data: countries, error} = await supabase.from('countries').select('*')
    
    return(
        <div>
            <div className='burger burger-squeeze'> write here something</div>
            {countries?.map((country) => 
                (
                    <h1>{country.name}</h1>
                )
            )}
        </div>
        
    )
}