import './Title.css'

export default function Title(props) {
    const { name } = props
    return (
        <h1 className="title">Welcome, {name}!</h1>
    )
}
