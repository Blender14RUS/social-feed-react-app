import React from 'react'
import {render} from 'react-dom'
import Feed from './lib/components/Feed'
import 'bootstrap/dist/css/bootstrap.css'

render(<Feed URL = 'http://api.massrelevance.com/MassRelDemo/kindle.json' CountOfPost = '10' Interval = '10000' />, document.getElementById('root'))
