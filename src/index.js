import React from 'react'
import {render} from 'react-dom'
import Feed from './lib/components/Feed'
import 'bootstrap/dist/css/bootstrap.css'

render(<Feed url="http://api.massrelevance.com/MassRelDemo/kindle.json" countOfPost="10" interval="10000" />, document.getElementById('root'))
