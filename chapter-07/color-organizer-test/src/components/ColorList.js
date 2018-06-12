import PropTypes from 'prop-types'
import Color from './Color'
import '../../stylesheets/ColorList.scss'

const ColorList = ({ colors=[], onRemove=f=>f, onRate=f=>f }) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>색이 없습니다. (색을 추가해 주세요)</p> :
            colors.map(color =>
                <Color key={color.id}
                       {...color}
                       onRemove={() => onRemove(color.id)}
                       onRate={(rating) => onRate(color.id, rating)}
                      />
            )
        }
    </div>

ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
}

export default ColorList
