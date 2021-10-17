import React from 'react'

const PersonList = (props) => {
  const peopleFiltered = props.persons
    .filter(person => person.name.toLowerCase().includes(props.filter.toLowerCase()))
    .map(person => <p key={person.name}>{person.name} {person.number}</p>)

  return (
    peopleFiltered
  )
}

export default PersonList