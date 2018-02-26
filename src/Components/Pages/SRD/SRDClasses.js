import React, {Component} from 'react';
import '../../../Stylesheets/Pages/SRDSection.css';
import SRDSection from './SRDSection';

class SRDClasses extends Component {
    render() {
        return (
            <div>
                <div id='SRDPageTitle'>Classes</div>
                <SRDSection section={'classes'}/>
            </div>
        )
    }
}

export default SRDClasses;