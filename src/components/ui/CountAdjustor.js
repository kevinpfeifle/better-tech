import Stack from 'react-bootstrap/Stack';
import { FiTrash2 } from 'react-icons/fi';

/**
 * A component for adjusting value counts by +/- 1.
 * Accepts callbacks for updates for potential DB or cache updates.
 * @param {Integer} count 
 * @param {Function} incrementFunc 
 * @param {Function} decrementFunc 
 * @returns CountAdjustor component
 */
const CountAdjustor = ({count, incrementFunc, decrementFunc, deletable=false}) => { 
    return (
        <div className="bg-light" style={{display:'inline-block',border:'solid', borderRadius:'10px', borderColor: '#f8f9fa'}}>
                <button className="btn-light" onClick={()=>decrementFunc(count-1)} style={{display:'inline-block',borderStyle:'none', 
                borderRight:'1px solid #c4c4c4', borderBottomLeftRadius:'10px', borderTopLeftRadius:'10px', 
                width:'2rem'}}>
                    {
                        // If deletable and ony 1 item, render the delete item on left, otherwise render the - symbol in a fragment.
                        // Just a style choice, the calling component should handle the delete scenario.
                        (deletable && count === 1) ? <FiTrash2></FiTrash2> : <>-</>
                    }
                </button>
                <div className="bg-light text-center" style={{display:'inline-block',minWidth:'2rem'}}>{count}</div>
                <button className="btn-light" onClick={()=>incrementFunc(count+1)} style={{display:'inline-block',borderStyle:'none',
                borderLeft:'1px solid #c4c4c4', borderBottomRightRadius:'10px', borderTopRightRadius:'10px', 
                width:'2rem'}}>
                    +
                </button>
        </div>
    );
};

export default CountAdjustor;