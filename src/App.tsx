import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css'

export function App() {
console.log('OII');

return (
<>
<Heading attr={123} attr2='String'>
    Olá mundo!
    </Heading>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad corporis suscipit, quidem molestias sequi reiciendis deserunt expedita hic dignissimos modi alias iure omnis. Accusantium nisi deserunt facilis. Minus, sint adipisci.
    </p>
 </>
);    
}

