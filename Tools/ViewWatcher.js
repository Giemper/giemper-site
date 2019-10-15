import { useEffect } from 'react';

const inView = (element) => {
    const bound = element.getBoundingClientRect();
    return !(bound.top > innerHeight || bound.bottom < 0);
}

const viewWatcher = (id) => {
    useEffect(() => {
        const element = document.getElementById(id);
        const seen = () => {
            if(inView(element)) {
                element.classList.add('seen');
                document.removeEventListener('scroll', seen);
            }
        }
        document.addEventListener('scroll', seen);
    });
}

export default viewWatcher;