<<<<<<< HEAD
import { Main } from "@/components/UI/Main/Main";
import { NavBarMain } from "@/components/UI/Navbar/NavBarMain";

export default function Home() {
  return (
    <>
      <NavBarMain />
      <Main />
    </>
  );
=======
import { Better } from '@/components/UI/BetterSection/Better';
import { FavoritesTool } from '@/components/UI/FavoriteToolsSection/FavoritesTool';
import { Main } from '@/components/UI/Main/Main';
import { NavBarMain } from '@/components/UI/Navbar/NavBarMain';
import { StoriesMain } from '@/components/UI/StoriesSection/StoriesMain';
import { Testimonials } from '@/components/UI/Testimonials/Testimonials';

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center py-2">
                <NavBarMain />
                <Main />
                <Better />
                <StoriesMain />
                <Testimonials />
                <FavoritesTool />
            </div>
        </>
    );
>>>>>>> 255a5fef88ae3adc7aa294228e44f1b3a1aeb344
}
