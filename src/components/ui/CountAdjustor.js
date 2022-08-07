import Stack from 'react-bootstrap/Stack';

/**
 * A component for adjusting value counts by +/- 1.
 * Accepts callbacks for updates for potential DB or cache updates.
 * @param {Integer} count 
 * @param {Function} incrementFunc 
 * @param {Function} decrementFunc 
 * @returns CountAdjustor component
 */
const CountAdjustor = ({count, incrementFunc, decrementFunc}) => { 
    return (
        <div className="bg-light" style={{border:'solid', borderRadius:'10px', borderColor: '#f8f9fa'}}>
            <Stack direction='horizontal' gap={1}>
                <button className="btn-light" onClick={()=>decrementFunc(count-1)} style={{borderStyle:'none', 
                borderRight:'1px solid #c4c4c4', borderBottomLeftRadius:'10px', borderTopLeftRadius:'10px', 
                width:'2rem'}}>
                    -
                </button>
                <div className="bg-light text-center" style={{minWidth:'2rem'}}>{count}</div>
                <button className="btn-light" onClick={()=>incrementFunc(count+1)} style={{borderStyle:'none',
                borderLeft:'1px solid #c4c4c4', borderBottomRightRadius:'10px', borderTopRightRadius:'10px', 
                width:'2rem'}}>
                    +
                </button>
            </Stack>
        </div>
    );
};

export default CountAdjustor;