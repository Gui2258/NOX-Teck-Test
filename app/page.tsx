import { Better } from '@/components/UI/BetterSection/Better';
import { Main } from '@/components/UI/Main/Main';
import { NavBarMain } from '@/components/UI/Navbar/NavBarMain';

export default function Home() {
    return (
        <>
            <NavBarMain />
            <Main />
            <Better />
        </>
    );
}
