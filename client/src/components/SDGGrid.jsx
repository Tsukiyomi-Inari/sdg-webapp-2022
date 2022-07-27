// SDG icon grid

import {SDG1, SDG2, SDG3, SDG4,SDG5, SDG6, SDG7, SDG8, SDG9, SDG10, SDG11, SDG12, SDG13, SDG14, SDG15, SDG16, SDG17, SDGlogo} from '../assets/icons-full'

const style = {
    marginRight: 6,
}

const SDGGrid = ()=> {
    return (
     <div>
        <div className="sdg_row1" >
            <img src={SDG1} alt="SDG 1" height="100" style={style}/>
            <img src={SDG2} alt="SDG 2" height="100" style={style}/>
            <img src={SDG3} alt="SDG 3" height="100" style={style}/>
            <img src={SDG4} alt="SDG 4" height="100" style={style}/>
            <img src={SDG5} alt="SDG 5" height="100" style={style}/>
            <img src={SDG6} alt="SDG 6" height="100" style={style}/>
        </div>
        <div className="sdg_row2">
            <img src={SDG7} alt="SDG 7" height="100" style={style}/>
            <img src={SDG8} alt="SDG 8" height="100" style={style}/>
            <img src={SDG9} alt="SDG 9" height="100" style={style}/>
            <img src={SDG10} alt="SDG 10" height="100" style={style}/>
            <img src={SDG11} alt="SDG 11" height="100" style={style}/>
            <img src={SDG12} alt="SDG 12" height="100" style={style}/>
        </div>
        <div className="sdg_row3" >
            <img src={SDG13} alt="SDG 13" height="100" style={style}/>  
            <img src={SDG14} alt="SDG 14" height="100" style={style}/>
            <img src={SDG15} alt="SDG 15" height="100" style={style}/>
            <img src={SDG16} alt="SDG 16" height="100" style={style}/>
            <img src={SDG17} alt="SDG 17" height="100" style={style}/>
            <img src={SDGlogo} alt="SDG logo" height="100" style={style}/>
       
            
        </div>
     </div>
    );
}

export default SDGGrid