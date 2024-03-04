import * as api from '@/api/server';
import { redirect } from 'next/navigation';
import { AdminPage } from '../components/admin/AdminPage';

const Page = async() => {
    const logged = await api.pingAdmin();
    if(!logged) return redirect('/admin/login');
    
    return (
       <AdminPage/>
    );
}

export default Page;