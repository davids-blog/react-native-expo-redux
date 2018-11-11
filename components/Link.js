import React  from 'react'
import { Button } from 'react-native'
import PropTypes from 'prop-types'

export const Link = (props) => {
    return (
        <Button onPress = { props.onPress }
                disabled = { props.active }
                //style={{ marginLeft: '4px' }}
                title = { props.children }
        >
        </Button>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onPress: PropTypes.func.isRequired
}