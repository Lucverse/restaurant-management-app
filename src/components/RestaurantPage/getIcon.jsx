import veg from '../../media/type/veg.png';
import nonveg from '../../media/type/non-veg.png';

function GetIcon(type) {
    if (type === 'vegetarian') {
        return <img src={veg} alt="veg" />;
    } else if (type === 'non-vegetarian') {
        return <img src={nonveg} alt="non-veg" />;
    } else if (type === 'both') {
        return (
            <div>
                <img src={veg} alt="veg" />
                <img src={nonveg} alt="non-veg" />
            </div>
        );
    } else {
        return null;
    }
}
export default GetIcon;