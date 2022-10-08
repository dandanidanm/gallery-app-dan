import React from 'react'
import PropTypes from 'prop-types'

const Card = ({img, names, location, bio}) => {
  return (
    <div>
       <div className="card text-center" style={{ width: "18rem" }}>
        <img
          src={img}
          className="card-img-top"
          alt={names}
        />
        <div className="card-body">
          <h4 className='text-start'>{ names === null ? null : `Nombre: ${names}`}</h4>
          <h6 className='text-start'>{location === null ? null : `Ubicacion: ${location}`}</h6>
          <hr />
          <p className="card-text text-center">
           {bio}
          </p>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
img: PropTypes.string,
names: PropTypes.string,
location: PropTypes.string,
bio: PropTypes.string
}

export default Card