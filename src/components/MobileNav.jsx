"use client"
import {Sheet, SheetContent,SheetTrigger} from '@/components/ui/sheet'
import {usePathname} from 'next/navigation'
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci'

const links = [
    {
        name:'home',
        path:'/'
    },
    {
        name:'services',
        path:'/services'
    },
    {
        name:'resume',
        path:'/resume'
    },
    {
        name:'work',
        path:'/work'
    },
    {
        name:'contact',
        path:'/contact'
    }
]

const MobileNav = () => {
    const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger  className='flex justify-center items-center'>
            <CiMenuFries className='tex-[32px] text-accent'/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className='mt-32 mb0-40 text-center text-2xl'>
                <Link></Link>
            </div>

            <nav>nav</nav>
        </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
