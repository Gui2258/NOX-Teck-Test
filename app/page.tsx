
import { Better } from '@/components/UI/BetterSection/Better';
import { FAQ } from '@/components/UI/FAQ/FAQ';
import { FavoritesTool } from '@/components/UI/FavoriteToolsSection/FavoritesTool';
import { Main } from '@/components/UI/Main/Main';
import { NavBarMain } from '@/components/UI/Navbar/NavBarMain';
import { StoriesMain } from '@/components/UI/StoriesSection/StoriesMain';
import { Testimonials } from '@/components/UI/Testimonials/Testimonials';

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <NavBarMain />
                <Main />
                <Better />
                <StoriesMain />
                <Testimonials />
                <FavoritesTool />
                <FAQ />
            </div>
        </>
    );
}
