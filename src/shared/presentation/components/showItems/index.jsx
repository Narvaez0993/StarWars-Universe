import PropTypes from 'prop-types';
import './showItems.scss';


const ShowItems = ({title}) => {
    return(
        <div className="show-item-container">
            <h2 className="title">
                {title}
            </h2>

            <div>
                <p>items</p>
            </div>
        </div>
    )
}

ShowItems.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
};


export default ShowItems;