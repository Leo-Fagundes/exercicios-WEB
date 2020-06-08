import React from 'react'
import ReactDom from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDom.render(
    <div>
        <Pai nome="Leo" sobrenome="Fagundes">
            <Filho nome="Melissa"  />            
            <Filho nome="Ana Carolina" /> 
        </Pai>
    </div>

, document.getElementById('root'))           