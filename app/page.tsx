import { Better } from '@/components/UI/BetterSection/Better';
import { Main } from '@/components/UI/Main/Main';
import { NavBarMain } from '@/components/UI/Navbar/NavBarMain';

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center py-2">
                <NavBarMain />
                <Main />
                <Better />
            </div>
        </>
    );
}
