import { reverse } from '../helpers'
import './Name.css'

export default function NameReversed(props) {
    const { name } = props
    return (
        <p className="name-reversed">
          Also, {name} backwards is {reverse(name)}
        </p>
    )
}
  