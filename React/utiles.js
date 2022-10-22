import PropTypes from 'prop-types'
//npm install prop-types
/*Props */
export const FirstApp = ({titulo, subtitulo}) => {
    return( 
        <>
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
        </>
    )
}

FirstApp.propTypes = {
    titulo: PropTypes.string.isRequired
}
FirstApp.defaultProp = {
    title: 'titulo default'
}