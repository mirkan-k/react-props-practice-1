import './Name.css'

export default function NameLength(props) {
    const { name } = props
    return (
        <p className="name-length">
          Did you know that {name} is {name.length} characters long?!
        </p>
    )
}
  