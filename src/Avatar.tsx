interface AvartarProps {
	image: string
	firstName: string
	lastName: string

}

function Avatar(props: AvartarProps){
	return (
		<div>
			<img src={props.image} alt={props.firstName} />
			<p>{props.firstName} {props.lastName}</p>
		</div>
	)
}

export default Avatar