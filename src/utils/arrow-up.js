import { CircleArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import '../scss/global.css'

const ArrowUp = () =>{

    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const moveToTop = () =>{
        window.scrollTo(0,0);
    }

    return(
        <>
            <div style={scrollTop > 0 ? {display:"block"} : {display:'none'}} className='btn-circle-up'>
                <CircleArrowUp onClick={moveToTop}/>
            </div>
            
        </>
    )
}

export default ArrowUp